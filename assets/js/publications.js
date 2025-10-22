// Publications data with DOI links
const publicationsData = [
    {
        title: "FRET Materials for Biosensing and Bioimaging",
        authors: "R Su, L Francés-Soriano, <strong>PI Diriwari</strong>, M Munir, L Haye, TJ Sørensen, et al.",
        journal: "Chemical Reviews 125 (19), 9429-9551",
        year: 2025,
        doi: "10.1021/acs.chemrev.5c00386"
    },
    {
        title: "Luminescent Terbium Probe for Time‐Resolved FRET and NSET Binding Assays with Quantum Dots and Gold Nanoparticles",
        authors: "<strong>P Iyanu Diriwari</strong>, N Connor Payne, R Mazitschek, T Gallavardin, et al.",
        journal: "Analysis & Sensing 5 (2), e202400059",
        year: 2025,
        doi: "10.1002/anse.202400059"
    },
    {
        title: "Enhancing near infrared II emission of gold nanoclusters via encapsulation in small polymer nanoparticles",
        authors: "L Haye, <strong>PI Diriwari</strong>, A Alhalabi, T Gallavardin, A Combes, AS Klymchenko, et al.",
        journal: "Advanced Optical Materials 11 (11), 2201474",
        year: 2023,
        doi: "10.1002/adom.202201474"
    },
    {
        title: "Metabolic labelling of cancer cells with glycodendrimers stimulate immune-mediated cytotoxicity",
        authors: "D Goyard, <strong>PI Diriwari</strong>, N Berthet",
        journal: "RSC Medicinal Chemistry 13 (1), 72-78",
        year: 2022,
        doi: "10.1039/D1MD00262G"
    },
    {
        title: "Genetic Polymorphisms of Glucose-6-Phosphate Dehydrogenase in Lagos, Nigeria",
        authors: "MO Babalola, NA Imaga, TA Samuel, <strong>IP Diriwari</strong>, O Kolade, I Ezeamalu, et al.",
        journal: "Hemoglobin 42 (1), 47-50",
        year: 2018,
        doi: "10.1080/03630269.2018.1434196"
    }
];

// Initialize publications section
function initPublications() {
    const publicationsSection = document.getElementById('publications');
    if (!publicationsSection) return;

    // Create publications HTML
    const publicationsHTML = `
        <div class="publications-wrapper">
            <div class="publications-header">
                <h2>📚 Research Publications</h2>
            </div>
            
            <div class="bookshelf-container">
                <div class="shelf-edge"></div>
                <div class="publications-table-wrapper">
                    <table class="publications-table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Authors</th>
                                <th>Journal</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${publicationsData.map(pub => `
                                <tr class="publication-row">
                                    <td class="pub-title">
                                        <a href="https://doi.org/${pub.doi}"
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           class="pub-title-link">
                                            ${pub.title}
                                        </a>
                                        <div class="pub-doi">
                                            <a href="https://doi.org/${pub.doi}"
                                               target="_blank"
                                               rel="noopener noreferrer">
                                                ${pub.doi}
                                            </a>
                                        </div>
                                    </td>
                                    <td class="pub-authors">${pub.authors}</td>
                                    <td class="pub-journal">${pub.journal}</td>
                                    <td class="pub-year">${pub.year}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
                <div class="shelf-surface"></div>
                <div class="books-decoration">
                    <div class="book book-1"></div>
                    <div class="book book-2"></div>
                    <div class="book book-3"></div>
                    <div class="book book-4"></div>
                    <div class="book book-5"></div>
                </div>
            </div>

            <div class="publications-stats">
                <div class="stat-card">
                    <div class="stat-number">5</div>
                    <div class="stat-label">Publications</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">38+</div>
                    <div class="stat-label">Citations</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">2018-2025</div>
                    <div class="stat-label">Active Years</div>
                </div>
            </div>
        </div>
    `;

    publicationsSection.innerHTML = publicationsHTML;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPublications);
} else {
    initPublications();
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { publicationsData, initPublications };
}
