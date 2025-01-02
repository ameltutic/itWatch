const express = require('express');
const app = express();
const PORT = 3002;

// Middleware zum Parsen von JSON-Daten
app.use(express.json());

// Beispiel-GET-Route
app.get('/api/itWatch2', (req, res) => {
    res.send({ "WARN" : "Hugo is very restrictive to the JSON format -- validate it!",
      
        "id" : "BestPractice_241217_091448",
        "start" : "2024-12-17T09:14:52.000+01:00",
        "ende" : "2024-12-17T09:15:04.000+01:00",
        "about" : {
          "record" : "Waschvorgang BestPractice_241217_091448",
          "clerk" : "SYSTEM",
          "consoleUser" : "itWLocAdmin",
          "source" : "",
          "comments" : [
            
          ],
          "reexport" : false,
          "failed" : false,
          "failedText" : "",
          "CreationDateTime" : "",
          "EMailAccount" : "",
          "EMailSenderAddress" : "",
          "ExpirationDate" : "",
          "JobName" : "",
          "Sachbearbeiter" : "",
          "Standort" : "",
          "Titel" : "",
          "Vorgang" : "BestPractice_241217_091448",
          "VorgangTyp" : ""
        },
        "washer" : {
          "name" : "DESKTOP-08BVCGJ",
          "os" : "Windows 10 Pro (Version 2009) ",
          "ip" : "192.168.1.103",
          "src_dir" : "WINDOWS(Disk drive C:)",
          "src_descr" : {
            "name" : "WINDOWS(Disk drive C:)",
            "type" : "Laufwerk",
            "path" : "C:\\IN\\DataIn",
            "attributes" : [
              "C:\\IN\\DataIn",
              "Typ: Laufwerk",
              "Root: C:\\",
              "Volumename: WINDOWS",
              "Filesystem: NTFS",
              "Devicetyp: Disk drive",
              "DeviceInfo: QEMU HARDDISK ATA Device"
            ]
          },
          "dst_dir" : "WINDOWS(Disk drive C:)",
          "dst_descr" : {
            "name" : "WINDOWS(Disk drive C:)",
            "type" : "Laufwerk",
            "path" : "C:\\OUT\\Clean\\BestPractice_241217_091448",
            "attributes" : [
              "C:\\OUT\\Clean",
              "Typ: Laufwerk",
              "Root: C:\\",
              "Volumename: WINDOWS",
              "Filesystem: NTFS",
              "Devicetyp: Disk drive",
              "DeviceInfo: QEMU HARDDISK ATA Device"
            ]
          },
          "archive_dir" : "n/a",
          "quarantine_dir" : "n/a"
        },
        "config" : {
          "itWashVersion" : "9.5.8.0",
          "itWashPolicy" : {
            "Variante" : "StdQS.BP.itWz",
            "DataVersion" : "1"
          },
          "MonitoringServer" : "DESKTOP-08BVCGJ",
          "QuarantineEnabled" : true
        },
        "srclist" : [
          "C:\\IN\\DataIn"
        ],
        "dstlist" : [
          "C:\\OUT\\Clean\\BestPractice_241217_091448"
        ],
        "sublist" : [
          ""
        ],
        "num" : 1,
        "flist_complete" : true,
        "flist" : [
          {
            "file_nr" : 0,
            "parent_nr" : -1,
            "id" : "xls_testExcel_embeddedPDF_documents.xls",
            "to" : "xls_testExcel_embeddedPDF_documents_xls.xls",
            "src" : 0,
            "dst" : 0,
            "quar" : -1,
            "arch" : -1,
            "sub" : 0,
            "in_recovery" : false,
            "duplicate" : false,
            "isW" : true,
            "deny" : false,
            "deleted" : false,
            "skipped" : false,
            "failed" : false,
            "is_encrypted" : false,
            "is_converted" : false,
            "is_child" : false,
            "is_parent" : false,
            "is_reintegrated" : false,
            "child_count_in" : 0,
            "child_count_out" : 0,
            "attr" : "154 KB (157184 B)",
            "ext" : "xls",
            "size" : 157184,
            "cat" : "Dokumente",
            "results" : [
              "Dokumenten-Analyse: Das Dokument enthält unerwünschte Objekte [Gefunden: 1 Objekt, 6 Dokumente]",
              "Dokumenten-Wäsche: Dokument bereinigt[Ersetzt: 1 Objekt, 6 Dokumente]",
              "Datei ist zur Nutzung freigegeben."
            ]
          }
        ],
        "total" : {
          "metrics" : {
            "total_files" : 1,
            "blocked_files" : 0,
            "converted_files" : 0,
            "deleted_files" : 0,
            "skipped_files" : 0,
            "to_recovery" : 0,
            "passed_files" : 1,
            "analyzed_files" : 1,
            "parent_files" : 0,
            "child_files" : 0,
            "total_size" : "154 KB",
            "average_speed" : "12,8 KB/s"
          },
          "deny_by_type" : 0,
          "deny_by_content" : 0,
          "choosen" : 1,
          "archived" : 0,
          "analyzed_good" : 0,
          "analyzed_bad" : 1,
          "washed" : 1,
          "to_quarantine" : 0,
          "to_output" : 1,
          "duplicates" : 0,
          "failed" : 0
        },
        "byExt" : {
          "xls" : 1
        },
        "byType" : {
          "Dokumente" : {
            "xls" : 1
          },
          "total" : {
            "Dokumente" : 1
          }
        }
      
 });
});




// Server starten
app.listen(PORT, () => {
  console.log(`API 2 running on port ${PORT}`);
});
