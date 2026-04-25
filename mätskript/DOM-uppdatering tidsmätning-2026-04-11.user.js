// ==UserScript==
// @name         DOM-uppdatering tidsmätning
// @namespace    http://tampermonkey.net/
// @version      2026-04-11
// @description  Mäta tid för DOM uppdatering
// @match        http://localhost:5173/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const JSON_URL = 'http://localhost:3000/dataToAdd';

    const SELECTORS = {
        wbs:          '[name="wbs"]',
        task:         '[name="task"]',
        duration:     '[name="duration"]',
        predecessors: '[name="predecessors"]',
        successors:   '[name="successors"]',
        budget:       '[name="budget"]',
        submit:       'button[type="submit"]', // "Add" knappen i formuläret
        table:        '[id="projectTable"]' //Tabellen på projektsidan
    };
// ######### GLOBALA VARIABLER #########
    let allData = [];
    let startTime = null;
    let measurement = [];
    let observer = null;
    let rowIndex = 0;
    let goalAmount = 0;
    let serieName = '';
// #####################################

// ######### MUTATIONOBSERVER #########
    function setMutationObserver() {
        // Hämta tabell
        const table = document.querySelector(SELECTORS.table);

        if (!table) {
            console.error('Tabell hittades inte! Kolla SELECTORS.table');
            return;
        }
        //Checka om starTime är satt - hoppa ut exekevering
        observer = new MutationObserver(() => {
            if (startTime === null) return;

            observer.disconnect();

            //Tidsstämpel för sluttid och beräkning av tid för DOM-uppdatering
            const domTime = performance.now() - startTime;
            startTime = null; //Återställ "startTime"

            // Spara mätning
            measurement.push({
                rowId:    rowIndex,
                duration: parseFloat(domTime.toFixed(2)),
                time:     new Date().toISOString()
            });

            console.log(`[${serieName}] Row ${rowIndex}/${goalAmount} | DOM-time: ${domTime.toFixed(2)} ms`);

            setTimeout(() => {
                addNewRow(); // Kalla på addNewRow för att mata in nästa rad
            }, 800);
        });

        observer.observe(table, {
            childList: true,
            subtree:   true
        });
    }
// #####################################

// ######### LÄGG TILL RADER ###########
    function addToForm(row) {
        window.__fillForm(row);
    }

    function addNewRow() {
        // Vid uppnådd fördefinerat antal rader i mätningen
        if (rowIndex >= goalAmount) {
            console.log(`${serieName} Done!`);
            exportCSV();
            return;
        }

        // Matar in data i formuläret
        addToForm(allData[rowIndex]);
        rowIndex++;

        setTimeout(() => {
            // Observer aktiv
            observer.observe(document.querySelector(SELECTORS.table), {
                childList: true,
                subtree:   true
            });
            //Tidsstämpel för start tid
            startTime = performance.now();
            document.querySelector(SELECTORS.submit).click();
        }, 300);
    }

// #####################################

// ######### EXPORTERA CSV ############
    function exportCSV() {
        //Målar upp rader i CSV filen
       const rows = [
           ['Rad nr', 'DOM-tid (ms)'], // Titel
           ...measurement.map((entry) => [entry.rowId, entry.duration]),
       ];

        const csv = rows.map(csvRow => csvRow.join(';')).join('\n'); // Semikolon mellan kolumner och radbryt efter raderna

        //Skapa och ladda ner filen
        const blob = new Blob([csv], { type: 'text/csv' });
        const a = document.createElement('a'); // Osynlig knapp för att ladda ner filen automatiskt
        a.href = URL.createObjectURL(blob);
        a.download = `${serieName}.csv`;
        a.click();

        console.log(`Exporterad: ${serieName}.csv`);
    }
// ###############################################################

// ######### FUNKTION FÖR ATT STARTA MÄTSERIE - i konsol #########

    window.__run = function(name, amount) { // Ex. window.__run('Serie 1', 10)
        if (amount > allData.length) {
            console.error(`Rader kvar i mätserien: ${allData.length} `);
            return;
        }

        // Sätter argument
        serieName = name;
        goalAmount = amount;
        rowIndex = 0; // Nollställer radräknaren
        measurement = []; // Tömmer listan så gamla mätningar inte kommer med.

        addNewRow();
    };
// #####################################

// ######### START - fetch JSON & sätt upp observer #########
    async function start() {
        try {
            const res = await fetch(JSON_URL); // Hämtar JSON-server
            const json = await res.json();
            allData = json;
            console.log(`Tillgängliga rader att mata in: ${allData.length}`);
            setMutationObserver(); // Kallar på att sätta upp Mutation observer
        } catch (e) {
            console.error('Kunde inte ladda JSON:', e);
        }
    }

    setTimeout(start, 2000); // Vid inladdning av sida - fördröj 2 sekunder innan "start" exekveras

})();