const report = require('multiple-cucumber-html-reporter')

report.generate({
    jsonDir: 'reports/json',
    reportPath: 'reports/',
    openReportInBrowser: true,
    displayDuration: true,
    displayReportTime: true,
    pagefooter: "<div><p>Manuletsgo</p></div>",
    metadata: {
        browser: {
        name: "chrome",
        version: "89",
        },
        device: "Local test machine",
        platform: {
            name: "windows",
            version: "10",
        }
    },
    customData: {
        title: 'Automation with Cypress',
        data: [
            {label: 'Project', value: 'Automation Testing'},
            {label: 'Release', value: '1.0.1'},
            {label: 'QA Automation', value: 'Emanuele A. Marques'},
        ]
      }
})
