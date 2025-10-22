// Structured data for Experience and Education
// Dates: use YYYY or YYYY-MM; end can be 'Present'.

export const experience = [
  {
    title: 'Postdoctoral Researcher',
    organization: 'Institut de Chimie Analytique et Réactivité Moléculaire en Normandie (CARMEN)',
    location: 'France',
    start: '2024-04',
    end: '2024-11',
    highlights: [
      'PAT-aligned optical characterisation (UV/Vis, fluorescence) for assay reproducibility and material qualification.',
      'Authored IQ/OQ/PQ validation protocols; trained early-career scientists; supported technology transfer.',
      'Engineered NIR-II gold nanocluster probes, achieving +42% imaging signal enhancement.'
    ]
  },
  {
    title: 'Doctoral Researcher (nanoFRET)',
    organization: 'Université de Rouen Normandie',
    location: 'France',
    start: '2021-01',
    end: '2024-03',
    highlights: [
      'Designed and validated luminescent FRET-based biosensors (lanthanides, dyes, nanoclusters) for IVD.',
      'Reduced reagent use by ~35% via miniaturisation; improved reproducibility by ~30%.',
      'Co-authored peer-reviewed publications; presented at international conferences.'
    ]
  },
  {
    title: 'Graduate Research Intern — Cancer Diagnostics & QC',
    organization: 'Université Grenoble Alpes',
    location: 'France',
    start: '2019-04',
    end: '2020-07',
    highlights: [
      'QC and analytical testing on oncology samples (UV/Vis, FACS, microscopy) under GLP standards.',
      'Designed and executed cytotoxicity assays and >30 flow-cytometry (FACS) runs across cancer cell lines.',
      'Synthesised and characterised theranostic cancer-targeting peptides; contributed to a publication on glycodendrimer-mediated cancer therapy.',
      'Bridged QC workflows and research assay development.'
    ]
  },
  {
    title: 'STEM Instructor',
    organization: 'Queen’s College',
    location: 'Lagos, Nigeria',
    start: '2016-02',
    end: '2018-08',
    highlights: [
      'Biology/Chemistry instruction; laboratory practicals; exam preparation and mentoring.'
    ]
  },
  {
    title: 'Community Engagement Coordinator',
    organization: 'NYSC Faith-Based NGO',
    location: 'Nigeria',
    start: '2015-10',
    end: '2016-08',
    highlights: [
      'Youth outreach and inter-unit communications; mentoring programmes and community education.'
    ]
  },
  {
    title: 'Science Communication Lead',
    organization: 'National Youth Service',
    location: 'Abia, Nigeria',
    start: '2014-08',
    end: '2015-08',
    highlights: [
      'Biology & Chemistry instruction in rural settings; founded science clubs; student mentorship.'
    ]
  },
  {
    title: 'Analytical Support Technician (Intern)',
    organization: 'Nigeria Stored Product Research Institute',
    location: 'Lagos, Nigeria',
    start: '2012-04',
    end: '2012-09',
    highlights: [
      'Nutritional, microbial & chemical analyses for post-harvest quality; method validation & documentation.'
    ]
  }
];

export const education = [
  {
    degree: 'PhD, Chemistry',
    institution: 'Université de Rouen Normandie',
    location: 'France',
    start: '2021-01',
    end: '2024-03',
    thesis: 'Resonance Energy Transfer within and to Optical Nanoparticles for Bioimaging and Biosensing Applications',
    highlights: []
  },
  {
    degree: 'Master 2, Chemistry for Life Sciences',
    institution: 'Université Grenoble Alpes',
    location: 'France',
    start: '2019-09',
    end: '2020-07',
    highlights: [
      'Scholarship: Petroleum Technology Development Fund (PTDF) Overseas Award'
    ]
  },
  {
    degree: 'Master 1, Chemistry',
    institution: 'Université Grenoble Alpes',
    location: 'France',
    start: '2018-09',
    end: '2019-07',
    highlights: [
      'Scholarship: Petroleum Technology Development Fund (PTDF) Overseas Award'
    ]
  },
  {
    degree: 'MSc, Biochemistry',
    institution: 'University of Lagos',
    location: 'Nigeria',
    start: '2016-01',
    end: '2017-12',
    highlights: []
  },
  {
    degree: 'BSc, Biochemistry',
    institution: 'University of Lagos',
    location: 'Nigeria',
    start: '2009-01',
    end: '2013-12',
    highlights: []
  }
];

// Optional structured skills data (not yet rendered by career.js)
export const skills = {
  'Bioanalytical & Diagnostics': [
    'FRET/TR-FRET/NSET assays',
    'ELISA',
    'Immunofluorescence',
    'Cytotoxicity assays',
    'PAT integration',
    'IVD assay development'
  ],
  'Molecular & Cell Biology': [
    'PCR',
    'Gene sequencing',
    'Mammalian cell culture',
    'Flow cytometry (FACS)',
    'Western blotting',
    'Protein purification',
    'Gel electrophoresis (SDS-PAGE, agarose)'
  ],
  'Optical & Imaging': [
    'UV/Vis',
    'Steady-state & time-resolved fluorescence',
    'NIR/NIR-II',
    'Quantum yield determination',
    'Confocal microscopy'
  ],
  'Nanomaterials & Bioconjugation': [
    'Gold nanoclusters',
    'Lanthanides',
    'Quantum dots',
    'Probe synthesis',
    'Surface chemistry & bioconjugation'
  ],
  'Analytical & Structural Chemistry': [
    'NMR (1D/2D; exposure to 3D NMR)',
    'HPLC',
    'Mass spectrometry',
    'X-ray (fundamentals)',
    'Spectrophotometry'
  ],
  'Computational & Data': [
    'Python',
    'Go (Zone01 Piscine)',
    'Git & version control',
    'Docker',
    'MATLAB',
    'OriginPro',
    'LaTeX',
    'BioRender'
  ],
  'Validation & QA': [
    'IQ/OQ/PQ protocols',
    'GLP/ISO mindset',
    'Instrumentation calibration & troubleshooting',
    'Reproducibility & documentation'
  ]
};

// Optional publications list for future use
export const publications = [
  {
    citation:
      'Diriwari, P. I.; Payne, N. C.; Mazitschek, R.; Gallavardin, T.; Hildebrandt, N. (2025). Luminescent Terbium Probe for Time-Resolved FRET and NSET Binding Assays with Quantum Dots and Gold Nanoparticles. Analysis & Sensing, 5, e202400059.'
  },
  {
    citation:
      'Su, R.; Francés-Soriano, L.; Diriwari, P. I.; Munir, M.; Haye, L.; Sørensen, T. J., et al. (2025). FRET Materials for Biosensing and Bioimaging. Chemical Reviews.'
  },
  {
    citation:
      'Haye, L.; Diriwari, P. I.; Alhalabi, A.; Gallavardin, T.; Combes, A.; Klymchenko, A. S., et al. (2023). Enhancing Near Infrared II Emission of Gold Nanoclusters via Encapsulation in Small Polymer Nanoparticles. Advanced Optical Materials, 11, 2201474.'
  },
  {
    citation:
      'Goyard, D.; Diriwari, P. I.; Berthet, N. (2022). Metabolic Labelling of Cancer Cells with Glycodendrimers Stimulate Immune-Mediated Cytotoxicity. RSC Medicinal Chemistry, 13, 72–78.'
  },
  {
    citation:
      'Babalola, M. O.; Imaga, N. A.; Samuel, T. A.; Diriwari, P. I.; Kolade, O.; Ezeamalu, I., et al. (2018). Genetic Polymorphisms of Glucose-6-Phosphate Dehydrogenase in Lagos, Nigeria. Hemoglobin, 42, 47–50.'
  }
];
