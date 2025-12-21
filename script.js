// Default courses data
const defaultCourses = [
    // Base - Semester 1
    { id: 'base1', name: 'Adv. Maths', category: 'base', type: 'msc', timing: 'S1', notes: '' },
    { id: 'base2', name: 'Adv. Stats', category: 'base', type: 'msc', timing: 'S1', notes: '' },
    { id: 'base3', name: 'Fss I', category: 'base', type: 'msc', timing: 'S1', notes: '' },
    { id: 'base4', name: 'Competition Law', category: 'base', type: 'msc', timing: 'S1', notes: '' },
    
    // Base - Semester 2
    { id: 'base5', name: 'Fss II (A)', category: 'base', type: 'msc', timing: 'S2', notes: '' },
    { id: 'base6', name: 'Fss II (B)', category: 'base', type: 'msc', timing: 'S2', notes: '' },
    { id: 'base7', name: 'Econometrics', category: 'base', type: 'msc', timing: 'S2', notes: '' },
    { id: 'base8', name: 'English', category: 'base', type: 'msc', timing: 'S2', notes: '' },
    { id: 'base9', name: '2nd Language', category: 'base', type: 'msc', timing: 'S2', notes: '' },
    
    // Category A - Semester 1
    { id: 'a1', name: 'Macroeconometrics', category: 'A', type: 'msc', timing: 'S1', notes: '20532 | Luca Sala | SECS-P/05\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20532&anno=2026&IdPag=8192' },
    
    // Category A - Semester 2
    { id: 'a2', name: 'Adv. Macro', category: 'A', type: 'msc', timing: 'S2', notes: '20285 | Antonella Trigari | SECS-P/01\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20285&anno=2026&IdPag=8192' },
    { id: 'a3', name: 'Adv. Micro', category: 'A', type: 'msc', timing: 'S2', notes: '20296 | Nicola Pavoni | SECS-P/01\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20296&anno=2026&IdPag=8192' },
    { id: 'a4', name: 'Microeconometrics', category: 'A', type: 'msc', timing: 'S2', notes: '20295 | Thomas Emile Robert Le Barbanchon | SECS-P/05\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20295&anno=2026&IdPag=8192' },
    
    // Category B - Semester 1
    { id: 'b1', name: 'Empirical Industrial Organization and Market Design', category: 'B', type: 'msc', timing: 'S1', notes: '20629 | Francesco Decarolis | SECS-P/06\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20629&anno=2026&IdPag=8192' },
    { id: 'b2', name: 'Monetary Policy', category: 'B', type: 'msc', timing: 'S1', notes: '20297 | Roberto Perotti | SECS-P/01\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20297&anno=2026&IdPag=8192' },
    { id: 'b3', name: 'Political Economics', category: 'B', type: 'msc', timing: 'S1', notes: '20901 | Guido Enrico Tabellini | SECS-P/01\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20901&anno=2026&IdPag=8192' },
    { id: 'b4', name: 'Public Economics', category: 'B', type: 'msc', timing: 'S1', notes: '20271 | Alessandra Casarico | SECS-P/03\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20271&anno=2026&IdPag=8192' },
    { id: 'b5', name: 'International Macroeconomics and Finance', category: 'B', type: 'msc', timing: 'S1', notes: '20970 | Tommaso Monacelli | SECS-P/01\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20970&anno=2026&IdPag=8192' },
    
    // Category B - Semester 2
    { id: 'b6', name: 'Development Economics', category: 'B', type: 'msc', timing: 'S2', notes: '20287 | Erika Deserranno | SECS-P/01\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20287&anno=2026&IdPag=8192' },
    { id: 'b7', name: 'Game Theory', category: 'B', type: 'msc', timing: 'S2', notes: '20290 | Pierpaolo Battigalli | SECS-P/01\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20290&anno=2026&IdPag=8192' },
    { id: 'b8', name: 'Labour Economics', category: 'B', type: 'msc', timing: 'S2', notes: '20294 | Tito Michele Boeri | SECS-P/01\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20294&anno=2026&IdPag=8192' },
    
    // Category C - Semester 1
    { id: 'c1', name: 'Taxation, Inequality and Growth', category: 'C', type: 'msc', timing: 'S1', notes: '20845 | Nicola Pavoni | SECS-P/01\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20845&anno=2026&IdPag=8192' },
    { id: 'c2', name: 'Welfare and Politics', category: 'C', type: 'msc', timing: 'S1', notes: '20633 | Vincenzo Galasso | SECS-P/01\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20633&anno=2026&IdPag=8192' },
    { id: 'c3', name: 'Comparative Politics', category: 'C', type: 'msc', timing: 'S1', notes: '20672 | Piero Stanig | SPS/04\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20672&anno=2026&IdPag=8192' },
    { id: 'c4', name: 'History of the Global Financial System', category: 'C', type: 'msc', timing: 'S1', notes: '20282 | Massimo Amato | SECS-P/12\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20282&anno=2026&IdPag=8192' },
    { id: 'c5', name: 'Population Dynamics and Economics', category: 'C', type: 'msc', timing: 'S1', notes: '20234 | Arnstein Aassve | SPS/04\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20234&anno=2026&IdPag=8192' },
    { id: 'c6', name: 'Politics of Conflict', category: 'C', type: 'msc', timing: 'S1', notes: '20673 | Ala Alrababah | SPS/04\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20673&anno=2026&IdPag=8192' },
    { id: 'c7', name: 'Bayesian Statistical Methods', category: 'C', type: 'msc', timing: 'S1', notes: '20231 | Beatrice Franzolini | SECS-S/01\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20231&anno=2026&IdPag=8192' },
    { id: 'c8', name: 'Decision Theory', category: 'C', type: 'msc', timing: 'S1', notes: '20754 | Massimo Marinacci | SECS-S/06\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20754&anno=2026&IdPag=8192' },
    
    // Category C - Semester 2
    { id: 'c9', name: 'Econ of Crime', category: 'C', type: 'msc', timing: 'S2', notes: '20687 | Paolo Pinotti | SECS-P/01\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20687&anno=2026&IdPag=8192' },
    { id: 'c10', name: 'Econ of European Integration', category: 'C', type: 'msc', timing: 'S2', notes: '20269 | Carlo Altomonte | SECS-P/02\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20269&anno=2026&IdPag=8192' },
    { id: 'c11', name: 'Energy Policy and Sustainability', category: 'C', type: 'msc', timing: 'S2', notes: '20730 | Francesco Gulli\' | SECS-P/06\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20730&anno=2026&IdPag=8192' },
    { id: 'c12', name: 'Econ of Digital Markets', category: 'C', type: 'msc', timing: 'S2', notes: '20847 | Michele Polo | SECS-P/01\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20847&anno=2026&IdPag=8192' },
    { id: 'c13', name: 'Monetary Policy and Financial Regulation', category: 'C', type: 'msc', timing: 'S2', notes: '20841 | Donato Masciandaro | SECS-P/01\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20841&anno=2026&IdPag=8192' },
    { id: 'c14', name: 'Principles of Finance', category: 'C', type: 'msc', timing: 'S2', notes: '20258 | Paolo Colla | SECS-P/01\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20258&anno=2026&IdPag=8192' },
    { id: 'c15', name: 'Behavioral Economics and Finance', category: 'C', type: 'msc', timing: 'S2', notes: '21047 | Nicola Gennaioli | SECS-P/01\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=21047&anno=2026&IdPag=8192' },
    { id: 'c16', name: 'Data, Inequality and Human Capital', category: 'C', type: 'msc', timing: 'S2', notes: '20973 | Michela Carlana | SECS-P/01\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20973&anno=2026&IdPag=8192' },
    { id: 'c17', name: 'History of Globalization and Inequality', category: 'C', type: 'msc', timing: 'S2', notes: '20528 | Guido Alfani | SECS-P/12\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20528&anno=2026&IdPag=8192' },
    { id: 'c18', name: 'Time Series Analysis', category: 'C', type: 'msc', timing: 'S2', notes: '20236 | Sonia Petrone | SECS-S/01\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20236&anno=2026&IdPag=8192' },
    
    // PhD Courses - Quarter 1
    { id: 'phd1', name: 'Accounting 6', category: 'PhD', type: 'phd', timing: 'Q1', notes: 'Leuz, Daske\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd2', name: 'Institutions and Economic Growth in Comparative Perspective', category: 'PhD', type: 'phd', timing: 'Q1', notes: 'Botticini\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd3', name: 'Political Economics Advanced', category: 'PhD', type: 'phd', timing: 'Q1', notes: 'Tabellini\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd4', name: 'Structural Econometrics', category: 'PhD', type: 'phd', timing: 'Q1', notes: 'Adda, Goerlach\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd5', name: 'Topics in Applied Econometrics', category: 'PhD', type: 'phd', timing: 'Q1', notes: 'Decarolis\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd6', name: 'Advanced Econometrics 4 (Machine Learning in Economics)', category: 'PhD', type: 'phd', timing: 'Q1', notes: 'Schwarz\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd7', name: 'Corporate Finance 4', category: 'PhD', type: 'phd', timing: 'Q1', notes: 'Carletti\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd8', name: 'Financial Markets Microstructure', category: 'PhD', type: 'phd', timing: 'Q1', notes: 'Rindi\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd9', name: 'Advanced Macro 1', category: 'PhD', type: 'phd', timing: 'Q1', notes: 'Pavoni\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd10', name: 'Advanced Micro 2', category: 'PhD', type: 'phd', timing: 'Q1', notes: 'Feng\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd11', name: 'Mathematics Preparatory', category: 'PhD', type: 'phd', timing: 'Q1', notes: 'Turansick\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd12', name: 'Introduction to Mathematics', category: 'PhD', type: 'phd', timing: 'Q1', notes: 'Turansick\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd13', name: 'Introduction to Probability', category: 'PhD', type: 'phd', timing: 'Q1', notes: 'Fortini\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd14', name: 'Microeconomics 1', category: 'PhD', type: 'phd', timing: 'Q1', notes: 'Di Tillio\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd15', name: 'Finance 1', category: 'PhD', type: 'phd', timing: 'Q1', notes: 'Rossi\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd16', name: 'Macroeconomics 1', category: 'PhD', type: 'phd', timing: 'Q1', notes: 'Pavoni\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    
    // PhD Courses - Quarter 2
    { id: 'phd17', name: 'Accounting 5', category: 'PhD', type: 'phd', timing: 'Q2', notes: 'Franco, Zhao\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd18', name: 'Political Economics Advanced', category: 'PhD', type: 'phd', timing: 'Q2', notes: 'Tabellini\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd19', name: 'Advanced Econometrics 2', category: 'PhD', type: 'phd', timing: 'Q2', notes: 'Sala\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd20', name: 'Corporate Finance 3', category: 'PhD', type: 'phd', timing: 'Q2', notes: 'Bretscher\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd21', name: 'Advanced Topics in Asset Pricing', category: 'PhD', type: 'phd', timing: 'Q2', notes: 'Croce\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd22', name: 'Advanced Macro 2', category: 'PhD', type: 'phd', timing: 'Q2', notes: 'Grassi\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd23', name: 'Topics in Economics & Finance 2', category: 'PhD', type: 'phd', timing: 'Q2', notes: 'Trigari, Le Barbanchon\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd24', name: 'International Trade', category: 'PhD', type: 'phd', timing: 'Q2', notes: 'Ottaviano\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd25', name: 'Econometrics 1', category: 'PhD', type: 'phd', timing: 'Q2', notes: 'Limodio\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd26', name: 'Microeconomics 2', category: 'PhD', type: 'phd', timing: 'Q2', notes: 'Battigalli\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd27', name: 'Finance 2', category: 'PhD', type: 'phd', timing: 'Q2', notes: 'Ortu\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd28', name: 'Macroeconomics 2', category: 'PhD', type: 'phd', timing: 'Q2', notes: 'Trigari\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    
    // PhD Courses - Quarter 3
    { id: 'phd29', name: 'Accounting 7', category: 'PhD', type: 'phd', timing: 'Q3', notes: 'Zhao\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd30', name: 'Accounting 8', category: 'PhD', type: 'phd', timing: 'Q3', notes: 'Florou\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd31', name: 'Development Economics (PhD)', category: 'PhD', type: 'phd', timing: 'Q3', notes: 'Fiorin\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd32', name: 'Behavioral and Experimental Economics', category: 'PhD', type: 'phd', timing: 'Q3', notes: 'Nunnari\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd33', name: 'Advanced Econometrics 3', category: 'PhD', type: 'phd', timing: 'Q3', notes: 'Favero\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd34', name: 'Continuous Time Finance', category: 'PhD', type: 'phd', timing: 'Q3', notes: 'Battauz\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd35', name: 'Advanced Macro 4', category: 'PhD', type: 'phd', timing: 'Q3', notes: 'Monacelli\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd36', name: 'Advanced Micro 2 (Q3)', category: 'PhD', type: 'phd', timing: 'Q3', notes: 'Feng\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd37', name: 'Topics in Economics & Finance 1', category: 'PhD', type: 'phd', timing: 'Q3', notes: 'Sabatucci\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd38', name: 'Econometrics 2', category: 'PhD', type: 'phd', timing: 'Q3', notes: 'TBA\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd39', name: 'Microeconomics 3', category: 'PhD', type: 'phd', timing: 'Q3', notes: 'Ottaviano\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd40', name: 'Finance 3', category: 'PhD', type: 'phd', timing: 'Q3', notes: 'Croce\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd41', name: 'Macroeconomics 3', category: 'PhD', type: 'phd', timing: 'Q3', notes: 'Maffezzoli\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    
    // PhD Courses - Quarter 4
    { id: 'phd42', name: 'Econometrics 3', category: 'PhD', type: 'phd', timing: 'Q4', notes: 'Marcellino\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd43', name: 'Microeconomics 4', category: 'PhD', type: 'phd', timing: 'Q4', notes: 'Kos\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd44', name: 'Finance 4', category: 'PhD', type: 'phd', timing: 'Q4', notes: 'Manconi\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    { id: 'phd45', name: 'Macroeconomics 4', category: 'PhD', type: 'phd', timing: 'Q4', notes: 'Iovino\nhttps://www.unibocconi.it/en/programs/phd/phd-economics-and-finance/courses-and-requirements' },
    
    // Extra Courses - Semester 1
    { id: 'extra1', name: 'Advanced Derivatives', category: 'extra', type: 'msc', timing: 'S1', notes: '20245\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20245&anno=2026&IdPag=8192' },
    { id: 'extra2', name: 'Advanced Fixed Income Analysis', category: 'extra', type: 'msc', timing: 'S1', notes: '21041\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=21041&anno=2026&IdPag=8192' },
    { id: 'extra3', name: 'Advertising Management', category: 'extra', type: 'msc', timing: 'S2', notes: '20302\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20302&anno=2026&IdPag=8192' },
    { id: 'extra4', name: 'Algorithmic Decision-Making', category: 'extra', type: 'msc', timing: 'S1', notes: '21050\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=21050&anno=2026&IdPag=8192' },
    { id: 'extra5', name: 'Accounting and Control in MNCS', category: 'extra', type: 'msc', timing: 'S1', notes: '20219\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20219&anno=2026&IdPag=8192' },
    { id: 'extra6', name: 'Financial Statements Analysis and Performance Measurement of Banks and Insurance Companies', category: 'extra', type: 'msc', timing: 'S1', notes: '20968\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20968&anno=2026&IdPag=8192' },
    { id: 'extra7', name: 'Analisi Strategiche, ESG E Valutazioni Finanziarie', category: 'extra', type: 'msc', timing: 'S1', notes: '20846\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20846&anno=2026&IdPag=8192' },
    { id: 'extra8', name: 'Applied Research Methods for Business Insight', category: 'extra', type: 'msc', timing: 'S1', notes: '21038\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=21038&anno=2026&IdPag=8192' },
    { id: 'extra9', name: 'Artificial Intelligence and the Law', category: 'extra', type: 'msc', timing: 'S2', notes: '50323\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=50323&anno=2026&IdPag=8192' },
    { id: 'extra10', name: 'Asset Management', category: 'extra', type: 'msc', timing: 'S1', notes: '20248\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20248&anno=2026&IdPag=8192' },
    { id: 'extra11', name: 'Environmental Law', category: 'extra', type: 'msc', timing: 'S1', notes: '50307\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=50307&anno=2026&IdPag=8192' },
    { id: 'extra12', name: 'Global Administrative Law', category: 'extra', type: 'msc', timing: 'S1', notes: '50308\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=50308&anno=2026&IdPag=8192' },
    { id: 'extra13', name: 'Transnational Constitutional Law and Government Policies', category: 'extra', type: 'msc', timing: 'S1', notes: '50145\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=50145&anno=2026&IdPag=8192' },
    { id: 'extra14', name: 'Advanced Labour Law (European Social Law)', category: 'extra', type: 'msc', timing: 'S2', notes: '50290\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=50290&anno=2026&IdPag=8192' },
    { id: 'extra15', name: 'Bank and Fintech: Vision and Strategy', category: 'extra', type: 'msc', timing: 'S1', notes: '20576\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20576&anno=2026&IdPag=8192' },
    { id: 'extra16', name: 'Big Data for Business Decisions', category: 'extra', type: 'msc', timing: 'S1', notes: '20564\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20564&anno=2026&IdPag=8192' },
    { id: 'extra17', name: 'Blockchain and Crypto Assets', category: 'extra', type: 'msc', timing: 'S1', notes: '20729\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20729&anno=2026&IdPag=8192' },
    { id: 'extra18', name: 'Building and Scaling a Tech-Based Startup', category: 'extra', type: 'msc', timing: 'S2', notes: '20870\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20870&anno=2026&IdPag=8192' },
    { id: 'extra19', name: 'Business and Investment Law of African Countries', category: 'extra', type: 'msc', timing: 'S2', notes: '50293\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=50293&anno=2026&IdPag=8192' },
    { id: 'extra20', name: 'Business Process Management and Modelling', category: 'extra', type: 'msc', timing: 'S1', notes: '20425\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20425&anno=2026&IdPag=8192' },
    { id: 'extra21', name: 'Change Management', category: 'extra', type: 'msc', timing: 'S1', notes: '20319\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20319&anno=2026&IdPag=8192' },
    { id: 'extra22', name: 'Cities and Regions: Managing Growth and Change', category: 'extra', type: 'msc', timing: 'S1', notes: '20555\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20555&anno=2026&IdPag=8192' },
    { id: 'extra23', name: 'Cities Cultural Tourism and Urban Life', category: 'extra', type: 'msc', timing: 'S1', notes: '20518\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20518&anno=2026&IdPag=8192' },
    { id: 'extra24', name: 'Citizenship and Migration Law', category: 'extra', type: 'msc', timing: 'S1', notes: '50193\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=50193&anno=2026&IdPag=8192' },
    { id: 'extra25', name: 'Collaborative Strategies for Innovation', category: 'extra', type: 'msc', timing: 'S2', notes: '20660\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20660&anno=2026&IdPag=8192' },
    { id: 'extra26', name: 'Comportamento Organizzativo E Leadership', category: 'extra', type: 'msc', timing: 'S2', notes: '20320\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20320&anno=2026&IdPag=8192' },
    { id: 'extra27', name: 'Computational Approaches to Climate Change Challenges', category: 'extra', type: 'msc', timing: 'S2', notes: '21037\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=21037&anno=2026&IdPag=8192' },
    { id: 'extra28', name: 'Computational Methods in Finance', category: 'extra', type: 'msc', timing: 'S1', notes: '21040\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=21040&anno=2026&IdPag=8192' },
    { id: 'extra29', name: 'Credit Risk Management', category: 'extra', type: 'msc', timing: 'S1', notes: '20249\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20249&anno=2026&IdPag=8192' },
    { id: 'extra30', name: 'CSR Sustainability and Social Entrepreneurship', category: 'extra', type: 'msc', timing: 'S2', notes: '20758\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20758&anno=2026&IdPag=8192' },
    { id: 'extra31', name: 'Data Analysis for Managerial Decision Making', category: 'extra', type: 'msc', timing: 'S1', notes: '20659\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20659&anno=2026&IdPag=8192' },
    { id: 'extra32', name: 'Data Analytics for Financial Disclosures', category: 'extra', type: 'msc', timing: 'S2', notes: '20722\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20722&anno=2026&IdPag=8192' },
    { id: 'extra33', name: 'Data Mining for Marketing Business and Society', category: 'extra', type: 'msc', timing: 'S2', notes: '20840\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20840&anno=2026&IdPag=8192' },
    { id: 'extra34', name: 'Data Science and Machine Learning for Finance', category: 'extra', type: 'msc', timing: 'S2', notes: '21046\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=21046&anno=2026&IdPag=8192' },
    { id: 'extra35', name: 'Deal Design and Valuation for Business Combinations and Joint Agreements', category: 'extra', type: 'msc', timing: 'S1', notes: '20223\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20223&anno=2026&IdPag=8192' },
    { id: 'extra36', name: 'Decision Making and Negotiation', category: 'extra', type: 'msc', timing: 'S2', notes: '20322\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20322&anno=2026&IdPag=8192' },
    { id: 'extra37', name: 'Design Thinking and Business Innovation', category: 'extra', type: 'msc', timing: 'S2', notes: '20844\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20844&anno=2026&IdPag=8192' },
    { id: 'extra38', name: 'Digital Business Transformation', category: 'extra', type: 'msc', timing: 'S1', notes: '20569\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20569&anno=2026&IdPag=8192' },
    { id: 'extra39', name: 'Digital Communication', category: 'extra', type: 'msc', timing: 'S2', notes: '20756\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20756&anno=2026&IdPag=8192' },
    { id: 'extra40', name: 'Digital Constitutionalism and Artificial Intelligence Regulation', category: 'extra', type: 'msc', timing: 'S1', notes: '50312\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=50312&anno=2026&IdPag=8192' },
    { id: 'extra41', name: 'Diritto Assicurativo', category: 'extra', type: 'msc', timing: 'S1', notes: '50305\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=50305&anno=2026&IdPag=8192' },
    { id: 'extra42', name: 'Diritto Bancario', category: 'extra', type: 'msc', timing: 'S1', notes: '50303\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=50303&anno=2026&IdPag=8192' },
    { id: 'extra43', name: 'Diritto Finanziario', category: 'extra', type: 'msc', timing: 'S1', notes: '50304\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=50304&anno=2026&IdPag=8192' },
    { id: 'extra44', name: 'Casi E Questioni Di Diritto Societario', category: 'extra', type: 'msc', timing: 'S1', notes: '50146\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=50146&anno=2026&IdPag=8192' },
    { id: 'extra45', name: 'Diritto Commerciale - Operazioni Straordinarie', category: 'extra', type: 'msc', timing: 'S1', notes: '50313\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=50313&anno=2026&IdPag=8192' },
    { id: 'extra46', name: 'Diritto Pubblico Dell\'Economia', category: 'extra', type: 'msc', timing: 'S1', notes: '50097\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=50097&anno=2026&IdPag=8192' },
    { id: 'extra47', name: 'Diritto Della Crisi D\'Impresa (Italiano ed Europeo)', category: 'extra', type: 'msc', timing: 'S1', notes: '50203\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=50203&anno=2026&IdPag=8192' },
    { id: 'extra48', name: 'Diritto Della Proprieta\' Intellettuale', category: 'extra', type: 'msc', timing: 'S1', notes: '50258\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=50258&anno=2026&IdPag=8192' },
    { id: 'extra49', name: 'Diritto Penale - Focus su Criminalita\' Economica', category: 'extra', type: 'msc', timing: 'S2', notes: '50285\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=50285&anno=2026&IdPag=8192' },
    { id: 'extra50', name: 'Diritto Tributario', category: 'extra', type: 'msc', timing: 'S1', notes: '20408\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20408&anno=2026&IdPag=8192' },
    { id: 'extra51', name: 'Dispute Resolution in a Globalized World', category: 'extra', type: 'msc', timing: 'S1', notes: '50260\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=50260&anno=2026&IdPag=8192' },
    { id: 'extra52', name: 'Ecommerce', category: 'extra', type: 'msc', timing: 'S2', notes: '20755\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20755&anno=2026&IdPag=8192' },
    { id: 'extra53', name: 'Empirical Methods for Innovation Strategies', category: 'extra', type: 'msc', timing: 'S1', notes: '20568\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20568&anno=2026&IdPag=8192' },
    { id: 'extra54', name: 'Enterprise and Financial Risk Management', category: 'extra', type: 'msc', timing: 'S1', notes: '21044\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=21044&anno=2026&IdPag=8192' },
    { id: 'extra55', name: 'EU Private International Law', category: 'extra', type: 'msc', timing: 'S1', notes: '50169\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=50169&anno=2026&IdPag=8192' },
    { id: 'extra56', name: 'European Politics: Between Technocracy and Populism', category: 'extra', type: 'msc', timing: 'S2', notes: '20679\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20679&anno=2026&IdPag=8192' },
    { id: 'extra57', name: 'Event and Mega Event Management and Creative Industries', category: 'extra', type: 'msc', timing: 'S1', notes: '20475\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20475&anno=2026&IdPag=8192' },
    { id: 'extra58', name: 'Economics Preparatory Course', category: 'extra', type: 'msc', timing: 'S1', notes: '20978\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20978&anno=2026&IdPag=8192' },
    { id: 'extra59', name: 'Financial Statements Analysis (Advanced Course)', category: 'extra', type: 'msc', timing: 'S2', notes: '20221\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20221&anno=2026&IdPag=8192' },
    { id: 'extra60', name: 'Finance and Development', category: 'extra', type: 'msc', timing: 'S1', notes: '21033\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=21033&anno=2026&IdPag=8192' },
    { id: 'extra61', name: 'Finance for the Green Business and the Circular Economy', category: 'extra', type: 'msc', timing: 'S2', notes: '20553\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20553&anno=2026&IdPag=8192' },
    { id: 'extra62', name: 'Financial Management (Advanced Topics)', category: 'extra', type: 'msc', timing: 'S1', notes: '20250\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20250&anno=2026&IdPag=8192' },
    { id: 'extra63', name: 'Firm Valuation', category: 'extra', type: 'msc', timing: 'S1', notes: '21031\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=21031&anno=2026&IdPag=8192' },
    { id: 'extra64', name: 'Forensic Accounting and Fraud Examination', category: 'extra', type: 'msc', timing: 'S2', notes: '20984\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20984&anno=2026&IdPag=8192' },
    { id: 'extra65', name: 'Fraud Detection and Risk Assessment', category: 'extra', type: 'msc', timing: 'S1', notes: '20563\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20563&anno=2026&IdPag=8192' },
    { id: 'extra66', name: 'Fundamental Rights in Europe', category: 'extra', type: 'msc', timing: 'S1', notes: '50256\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=50256&anno=2026&IdPag=8192' },
    { id: 'extra67', name: 'Gender Law and Women\'S RIGHTS', category: 'extra', type: 'msc', timing: 'S1', notes: '50250\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=50250&anno=2026&IdPag=8192' },
    { id: 'extra68', name: 'Geopolitics for Business', category: 'extra', type: 'msc', timing: 'S2', notes: '20763\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20763&anno=2026&IdPag=8192' },
    { id: 'extra69', name: 'Global Financial Markets', category: 'extra', type: 'msc', timing: 'S2', notes: '21042\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=21042&anno=2026&IdPag=8192' },
    { id: 'extra70', name: 'Global Legal Ethics', category: 'extra', type: 'msc', timing: 'S1', notes: '50326\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=50326&anno=2026&IdPag=8192' },
    { id: 'extra71', name: 'Green Management and Corporate Sustainability', category: 'extra', type: 'msc', timing: 'S2', notes: '20412\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20412&anno=2026&IdPag=8192' },
    { id: 'extra72', name: 'Healthcare Management and Policy', category: 'extra', type: 'msc', timing: 'S1', notes: '20495\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20495&anno=2026&IdPag=8192' },
    { id: 'extra73', name: 'Heritage Museums and Communities Engagement', category: 'extra', type: 'msc', timing: 'S1', notes: '20803\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20803&anno=2026&IdPag=8192' },
    { id: 'extra74', name: 'Heritage Museums and Digital Cultures', category: 'extra', type: 'msc', timing: 'S1', notes: '20802\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20802&anno=2026&IdPag=8192' },
    { id: 'extra75', name: 'Industrial Marketing', category: 'extra', type: 'msc', timing: 'S1', notes: '20307\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20307&anno=2026&IdPag=8192' },
    { id: 'extra76', name: 'Innovation and Entrepreneurship in the Digital Age', category: 'extra', type: 'msc', timing: 'S1', notes: '20856\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20856&anno=2026&IdPag=8192' },
    { id: 'extra77', name: 'Innovation Growth and Sustainability', category: 'extra', type: 'msc', timing: 'S2', notes: '20402\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20402&anno=2026&IdPag=8192' },
    { id: 'extra78', name: 'Innovation in Services', category: 'extra', type: 'msc', timing: 'S1', notes: '20292\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20292&anno=2026&IdPag=8192' },
    { id: 'extra79', name: 'Innovation in the Sharing Economy: the Role of Platforms and Business Models', category: 'extra', type: 'msc', timing: 'S2', notes: '20661\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20661&anno=2026&IdPag=8192' },
    { id: 'extra80', name: 'Innovative Retail Design', category: 'extra', type: 'msc', timing: 'S2', notes: '20529\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20529&anno=2026&IdPag=8192' },
    { id: 'extra81', name: 'International and Comparative Taxation', category: 'extra', type: 'msc', timing: 'S1', notes: '50077\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=50077&anno=2026&IdPag=8192' },
    { id: 'extra82', name: 'International Corporate Finance', category: 'extra', type: 'msc', timing: 'S1', notes: '20265\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20265&anno=2026&IdPag=8192' },
    { id: 'extra83', name: 'International Trade and Investment Law', category: 'extra', type: 'msc', timing: 'S1', notes: '50182\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=50182&anno=2026&IdPag=8192' },
    { id: 'extra84', name: 'Introduction to Partial Differential Equations', category: 'extra', type: 'msc', timing: 'S2', notes: '20937\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20937&anno=2026&IdPag=8192' },
    { id: 'extra85', name: 'Introduction to Sport Analytics', category: 'extra', type: 'msc', timing: 'S2', notes: '20630\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20630&anno=2026&IdPag=8192' },
    { id: 'extra86', name: 'Investing in Alternative - Illiquid Assets', category: 'extra', type: 'msc', timing: 'S2', notes: '21054\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=21054&anno=2026&IdPag=8192' },
    { id: 'extra87', name: 'IT Consulting', category: 'extra', type: 'msc', timing: 'S2', notes: '20209\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20209&anno=2026&IdPag=8192' },
    { id: 'extra88', name: 'Key Issues in EU Law', category: 'extra', type: 'msc', timing: 'S1', notes: '50204\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=50204&anno=2026&IdPag=8192' },
    { id: 'extra89', name: 'Long Term Investments and Public Private Partnerships', category: 'extra', type: 'msc', timing: 'S1', notes: '20634\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20634&anno=2026&IdPag=8192' },
    { id: 'extra90', name: 'Luxury Companies in the Global Landscape', category: 'extra', type: 'msc', timing: 'S1', notes: '20671\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20671&anno=2026&IdPag=8192' },
    { id: 'extra91', name: 'Machine Learning and Causal Inference for Marketing Decisions', category: 'extra', type: 'msc', timing: 'S2', notes: '20969\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20969&anno=2026&IdPag=8192' },
    { id: 'extra92', name: 'Management Consulting', category: 'extra', type: 'msc', timing: 'S1', notes: '20325\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20325&anno=2026&IdPag=8192' },
    { id: 'extra93', name: 'Management of Fashion and Lifestyle Companies', category: 'extra', type: 'msc', timing: 'S1', notes: '21039\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=21039&anno=2026&IdPag=8192' },
    { id: 'extra94', name: 'Management of International Organizations and NGO\'s', category: 'extra', type: 'msc', timing: 'S2', notes: '20516\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20516&anno=2026&IdPag=8192' },
    { id: 'extra95', name: 'Managerial Issues in Made in Italy Industries', category: 'extra', type: 'msc', timing: 'S2', notes: '20521\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20521&anno=2026&IdPag=8192' },
    { id: 'extra96', name: 'Managing Business Government Relations', category: 'extra', type: 'msc', timing: 'S2', notes: '20515\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20515&anno=2026&IdPag=8192' },
    { id: 'extra97', name: 'Managing People and Organizations', category: 'extra', type: 'msc', timing: 'S2', notes: '21051\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=21051&anno=2026&IdPag=8192' },
    { id: 'extra98', name: 'Managing the Growing Entrepreneurial Venture', category: 'extra', type: 'msc', timing: 'S2', notes: '20522\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20522&anno=2026&IdPag=8192' },
    { id: 'extra99', name: 'Managing the Multinational Corporation', category: 'extra', type: 'msc', timing: 'S1', notes: '20539\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20539&anno=2026&IdPag=8192' },
    { id: 'extra100', name: 'Marketing Dei Servizi', category: 'extra', type: 'msc', timing: 'S1', notes: '20309\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20309&anno=2026&IdPag=8192' },
    { id: 'extra101', name: 'Marketing Esperienziale', category: 'extra', type: 'msc', timing: 'S2', notes: '20310\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20310&anno=2026&IdPag=8192' },
    { id: 'extra102', name: 'International Marketing', category: 'extra', type: 'msc', timing: 'S1', notes: '20311\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20311&anno=2026&IdPag=8192' },
    { id: 'extra103', name: 'Market Structure and Information-Based Models', category: 'extra', type: 'msc', timing: 'S1', notes: '21048\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=21048&anno=2026&IdPag=8192' },
    { id: 'extra104', name: 'Mergers and Acquisitions', category: 'extra', type: 'msc', timing: 'S1', notes: '20256\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20256&anno=2026&IdPag=8192' },
    { id: 'extra105', name: 'Movie Industry', category: 'extra', type: 'msc', timing: 'S1', notes: '20477\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20477&anno=2026&IdPag=8192' },
    { id: 'extra106', name: 'Negotiation Mediation and International Dispute Settlements', category: 'extra', type: 'msc', timing: 'S2', notes: '50325\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=50325&anno=2026&IdPag=8192' },
    { id: 'extra107', name: 'Network Leadership', category: 'extra', type: 'msc', timing: 'S1', notes: '20979\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20979&anno=2026&IdPag=8192' },
    { id: 'extra108', name: 'NLP and Machine Learning for Business Decisions', category: 'extra', type: 'msc', timing: 'S2', notes: '20985\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20985&anno=2026&IdPag=8192' },
    { id: 'extra109', name: 'Operations Management Lab', category: 'extra', type: 'msc', timing: 'S1', notes: '20346\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20346&anno=2026&IdPag=8192' },
    { id: 'extra110', name: 'Personnel and Labour Economics for Managers', category: 'extra', type: 'msc', timing: 'S2', notes: '21032\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=21032&anno=2026&IdPag=8192' },
    { id: 'extra111', name: 'Population Dynamics and Economics', category: 'extra', type: 'msc', timing: 'S1', notes: '20234\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20234&anno=2026&IdPag=8192' },
    { id: 'extra112', name: 'Predictive and Generative AI for Business Decisions', category: 'extra', type: 'msc', timing: 'S2', notes: '21035\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=21035&anno=2026&IdPag=8192' },
    { id: 'extra113', name: 'Pricing Analytics', category: 'extra', type: 'msc', timing: 'S1', notes: '20631\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20631&anno=2026&IdPag=8192' },
    { id: 'extra114', name: 'Private Equity and Venture Capital', category: 'extra', type: 'msc', timing: 'S2', notes: '20260\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20260&anno=2026&IdPag=8192' },
    { id: 'extra115', name: 'Project Management', category: 'extra', type: 'msc', timing: 'S2', notes: '20329\nhttps://didattica.unibocconi.edu/ts/tsn_anteprima.php?cod_ins=20329&anno=2026&IdPag=8192' },
    { id: 'extra116', name: 'Project Management and Funding of International Programs', category: 'extra', type: 'msc', timing: 'S2', notes: '20278\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20278&anno=2026&IdPag=8192' },
    { id: 'extra117', name: 'Public Management for Competitiveness', category: 'extra', type: 'msc', timing: 'S1', notes: '20273\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20273&anno=2026&IdPag=8192' },
    { id: 'extra118', name: 'Public Networks: Governance and Management', category: 'extra', type: 'msc', timing: 'S1', notes: '20967\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20967&anno=2026&IdPag=8192' },
    { id: 'extra119', name: 'Quantitative Portfolio Management', category: 'extra', type: 'msc', timing: 'S2', notes: '21045\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=21045&anno=2026&IdPag=8192' },
    { id: 'extra120', name: 'Real Estate Finance', category: 'extra', type: 'msc', timing: 'S1', notes: '20261\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20261&anno=2026&IdPag=8192' },
    { id: 'extra121', name: 'Advanced Auditing', category: 'extra', type: 'msc', timing: 'S1', notes: '20226\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20226&anno=2026&IdPag=8192' },
    { id: 'extra122', name: 'Corporate Financial Turnaround and Distressed Value Investing', category: 'extra', type: 'msc', timing: 'S2', notes: '20267\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20267&anno=2026&IdPag=8192' },
    { id: 'extra123', name: 'Sales Management', category: 'extra', type: 'msc', timing: 'S1', notes: '20429\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20429&anno=2026&IdPag=8192' },
    { id: 'extra124', name: 'Marketing Applied Semiotics', category: 'extra', type: 'msc', timing: 'S1', notes: '20314\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20314&anno=2026&IdPag=8192' },
    { id: 'extra125', name: 'Social Media Marketing', category: 'extra', type: 'msc', timing: 'S1', notes: '20543\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20543&anno=2026&IdPag=8192' },
    { id: 'extra126', name: 'Social Movements Markets and Firms', category: 'extra', type: 'msc', timing: 'S1', notes: '20670\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20670&anno=2026&IdPag=8192' },
    { id: 'extra127', name: 'Sports Business and Management', category: 'extra', type: 'msc', timing: 'S1', notes: '20552\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20552&anno=2026&IdPag=8192' },
    { id: 'extra128', name: 'Sports Law', category: 'extra', type: 'msc', timing: 'S2', notes: '50206\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=50206&anno=2026&IdPag=8192' },
    { id: 'extra129', name: 'State Competition and Conflicts in the Cyber Space', category: 'extra', type: 'msc', timing: 'S1', notes: '20764\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20764&anno=2026&IdPag=8192' },
    { id: 'extra130', name: 'Strategic Management in Family Businesses', category: 'extra', type: 'msc', timing: 'S1', notes: '20525\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20525&anno=2026&IdPag=8192' },
    { id: 'extra131', name: 'Strategic Options for Global Markets', category: 'extra', type: 'msc', timing: 'S1', notes: '20566\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20566&anno=2026&IdPag=8192' },
    { id: 'extra132', name: 'Structured and Project Finance', category: 'extra', type: 'msc', timing: 'S2', notes: '20439\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20439&anno=2026&IdPag=8192' },
    { id: 'extra133', name: 'Supply Chain Management', category: 'extra', type: 'msc', timing: 'S1', notes: '20348\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20348&anno=2026&IdPag=8192' },
    { id: 'extra134', name: 'Sustainable Communication and Retailing', category: 'extra', type: 'msc', timing: 'S1', notes: '21036\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=21036&anno=2026&IdPag=8192' },
    { id: 'extra135', name: 'Sustainable Urban Regeneration', category: 'extra', type: 'msc', timing: 'S1', notes: '20850\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20850&anno=2026&IdPag=8192' },
    { id: 'extra136', name: 'Television', category: 'extra', type: 'msc', timing: 'S1', notes: '20476\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20476&anno=2026&IdPag=8192' },
    { id: 'extra137', name: 'Current Topics in Company and Business Law (Listed Companies)', category: 'extra', type: 'msc', timing: 'S1', notes: '50314\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=50314&anno=2026&IdPag=8192' },
    { id: 'extra138', name: 'The Future of Europe (Civica Course)', category: 'extra', type: 'msc', timing: 'S1', notes: '20774\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20774&anno=2026&IdPag=8192' },
    { id: 'extra139', name: 'The Making of the Present - a Global History of Globalization (Civica Course)', category: 'extra', type: 'msc', timing: 'S2', notes: '20905\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20905&anno=2026&IdPag=8192' },
    { id: 'extra140', name: 'The Road to the Green Transition (Civica Course)', category: 'extra', type: 'msc', timing: 'S2', notes: '20975\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20975&anno=2026&IdPag=8192' },
    { id: 'extra141', name: 'Trade Marketing and Category Management', category: 'extra', type: 'msc', timing: 'S1', notes: '20317\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20317&anno=2026&IdPag=8192' },
    { id: 'extra142', name: 'Value Chains and Business Models in Fashion & Luxury', category: 'extra', type: 'msc', timing: 'S1', notes: '20524\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=20524&anno=2026&IdPag=8192' },
    { id: 'extra143', name: 'Wealth Management for Individual and Institutional Clients', category: 'extra', type: 'msc', timing: 'S1', notes: '21043\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=21043&anno=2026&IdPag=8192' },
    { id: 'extra144', name: 'White-Collar Crime', category: 'extra', type: 'msc', timing: 'S1', notes: '50249\nhttps://didattica.unibocconi.eu/ts/tsn_anteprima.php?cod_ins=50249&anno=2026&IdPag=8192' },
];

// Application state
let courses = [];
let placedCourses = {}; // Now stores arrays: { "1-1": [{course1}, {course2}], ... }
let draggedCourse = null;
let activeFilters = new Set(['all', 'base', 'A', 'B', 'C', 'extra', 'PhD']);
let activeTimingFilters = new Set(['all', 'S1', 'S2']);
let showNotes = true;
let editingPlacedCourse = null; // Track which placed course is being edited

// Initialize the application
function init() {
    // Load courses from localStorage or use defaults
    const savedCourses = localStorage.getItem('courses');
    courses = savedCourses ? JSON.parse(savedCourses) : [...defaultCourses];
    
    // Load placed courses from localStorage
    const savedPlacedCourses = localStorage.getItem('placedCourses');
    if (savedPlacedCourses) {
        const parsed = JSON.parse(savedPlacedCourses);
        // Migrate old format (single course) to new format (array of courses)
        placedCourses = {};
        Object.entries(parsed).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                placedCourses[key] = value;
            } else {
                // Old format: single course object
                placedCourses[key] = [value];
            }
        });
    } else {
        placedCourses = {};
    }
    
    // Render the UI
    renderCourseList();
    renderPlacedCourses();
    
    // Set up event listeners
    setupEventListeners();
}

// Set up all event listeners
function setupEventListeners() {
    // Add course button
    document.getElementById('addCourseBtn').addEventListener('click', addNewCourse);
    
    // Clear plan button
    document.getElementById('clearPlanBtn').addEventListener('click', clearPlan);
    
    // Save plan button
    document.getElementById('savePlanBtn').addEventListener('click', savePlan);
    
    // Filter checkboxes
    document.querySelectorAll('.category-filter').forEach(checkbox => {
        checkbox.addEventListener('change', handleFilterChange);
    });
    
    // Timing filter checkboxes
    document.querySelectorAll('.timing-filter').forEach(checkbox => {
        checkbox.addEventListener('change', handleTimingFilterChange);
    });
    
    // Notes toggle
    document.getElementById('showNotesToggle').addEventListener('change', handleNotesToggle);
    
    // Course type change (to update timing options)
    document.getElementById('newCourseType').addEventListener('change', updateTimingOptions);
    
    // Set up drop zones
    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('dragleave', handleDragLeave);
        zone.addEventListener('drop', handleDrop);
    });
    
    // Modal event listeners
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('saveNotesBtn').addEventListener('click', saveNotesFromModal);
    document.getElementById('notesModal').addEventListener('click', (e) => {
        if (e.target.id === 'notesModal') closeModal();
    });
    document.getElementById('instructionsModal').addEventListener('click', (e) => {
        if (e.target.id === 'instructionsModal') closeInstructionsModal();
    });
}

// Update timing options based on course type
function updateTimingOptions() {
    const type = document.getElementById('newCourseType').value;
    const timingSelect = document.getElementById('newCourseTiming');
    
    if (type === 'msc') {
        timingSelect.innerHTML = `
            <option value="">-- Select Semester --</option>
            <option value="S1">Semester 1 (Q1-Q2)</option>
            <option value="S2">Semester 2 (Q3-Q4)</option>
        `;
    } else {
        timingSelect.innerHTML = `
            <option value="">-- Select Quarter --</option>
            <option value="Q1">Quarter 1</option>
            <option value="Q2">Quarter 2</option>
            <option value="Q3">Quarter 3</option>
            <option value="Q4">Quarter 4</option>
        `;
    }
}

// Handle notes toggle
function handleNotesToggle(e) {
    showNotes = e.target.checked;
    renderCourseList();
    renderPlacedCourses();
}

// Handle timing filter changes
function handleTimingFilterChange(e) {
    const value = e.target.value;
    const isChecked = e.target.checked;
    
    if (value === 'all') {
        if (isChecked) {
            activeTimingFilters = new Set(['all', 'S1', 'S2']);
            document.querySelectorAll('.timing-filter').forEach(cb => cb.checked = true);
        } else {
            activeTimingFilters.clear();
            document.querySelectorAll('.timing-filter').forEach(cb => cb.checked = false);
        }
    } else {
        if (isChecked) {
            activeTimingFilters.add(value);
        } else {
            activeTimingFilters.delete(value);
            activeTimingFilters.delete('all');
            document.querySelector('.timing-filter[value="all"]').checked = false;
        }
        
        // Check if all individual filters are selected
        const allSelected = ['S1', 'S2'].every(t => activeTimingFilters.has(t));
        if (allSelected) {
            activeTimingFilters.add('all');
            document.querySelector('.timing-filter[value="all"]').checked = true;
        }
    }
    
    renderCourseList();
}

// Render the course list
function renderCourseList() {
    const container = document.getElementById('courseListContainer');
    container.innerHTML = '';
    
    const filteredCourses = courses.filter(course => {
        // Category filter
        const passesCategory = activeFilters.has('all') || activeFilters.has(course.category);
        
        // Timing filter
        let passesTiming = activeTimingFilters.has('all');
        if (!passesTiming) {
            const courseTiming = course.timing || 'S1';
            // Map PhD quarters to semesters for filtering
            if (courseTiming === 'Q1' || courseTiming === 'Q2' || courseTiming === 'S1') {
                passesTiming = activeTimingFilters.has('S1');
            } else if (courseTiming === 'Q3' || courseTiming === 'Q4' || courseTiming === 'S2') {
                passesTiming = activeTimingFilters.has('S2');
            }
        }
        
        return passesCategory && passesTiming;
    });
    
    filteredCourses.forEach(course => {
        const courseElement = createCourseElement(course);
        container.appendChild(courseElement);
    });
}

// Create a course element
function createCourseElement(course) {
    const div = document.createElement('div');
    div.className = 'course-item';
    div.draggable = true;
    div.dataset.courseId = course.id;
    div.dataset.category = course.category;
    div.dataset.type = course.type;
    
    const notesClass = showNotes ? '' : 'hidden';
    const notesHtml = course.notes ? `<div class="course-notes ${notesClass}">${formatNotes(course.notes)}</div>` : '';
    
    // Format timing display
    const timing = course.timing || 'S1';
    let timingLabel = timing;
    if (timing === 'S1') timingLabel = 'Sem 1';
    else if (timing === 'S2') timingLabel = 'Sem 2';
    
    div.innerHTML = `
        <button class="delete-course" data-course-id="${course.id}" title="Delete course">×</button>
        <div class="course-name">${escapeHtml(course.name)}</div>
        <div class="course-meta">
            <span class="course-badge badge-category-${course.category}">${course.category}</span>
            <span class="course-badge badge-type-${course.type}">${course.type === 'msc' ? 'MSc (2Q)' : 'PhD (1Q)'}</span>
            <span class="timing-badge ${timing}">${timingLabel}</span>
        </div>
        ${notesHtml}
    `;
    
    div.addEventListener('dragstart', handleDragStart);
    div.addEventListener('dragend', handleDragEnd);
    
    // Delete button event listener
    div.querySelector('.delete-course').addEventListener('click', (e) => {
        e.stopPropagation();
        deleteCourseFromRepository(course.id);
    });
    
    return div;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Format notes with clickable links and line breaks
function formatNotes(text) {
    if (!text) return '';
    // First escape HTML
    let formatted = escapeHtml(text);
    // Convert URLs to clickable links
    formatted = formatted.replace(
        /(https?:\/\/[^\s]+)/g,
        '<a href="$1" target="_blank" rel="noopener noreferrer">View syllabus ↗</a>'
    );
    // Convert newlines to <br>
    formatted = formatted.replace(/\n/g, '<br>');
    return formatted;
}

// Delete a course from the repository
function deleteCourseFromRepository(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (!course) return;
    
    if (confirm(`Are you sure you want to delete "${course.name}" from the course repository?`)) {
        courses = courses.filter(c => c.id !== courseId);
        saveCourses();
        renderCourseList();
    }
}

// Handle drag start
function handleDragStart(e) {
    const course = courses.find(c => c.id === e.target.dataset.courseId);
    draggedCourse = {
        id: course.id,
        category: course.category,
        type: course.type,
        name: course.name,
        timing: course.timing || 'S1',
        notes: course.notes || '',
        placementId: 'placement-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9)
    };
    e.target.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}

// Handle drag end
function handleDragEnd(e) {
    e.target.classList.remove('dragging');
    draggedCourse = null;
}

// Handle drag over
function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    
    const dropZone = e.currentTarget;
    if (!dropZone.classList.contains('drag-over')) {
        dropZone.classList.add('drag-over');
    }
}

// Handle drag leave
function handleDragLeave(e) {
    if (e.target.classList.contains('drop-zone')) {
        e.target.classList.remove('drag-over');
    }
}

// Handle drop
function handleDrop(e) {
    e.preventDefault();
    const dropZone = e.currentTarget;
    dropZone.classList.remove('drag-over');
    
    if (!draggedCourse) return;
    
    const quarter = dropZone.closest('.quarter');
    const year = parseInt(quarter.dataset.year);
    const quarterNum = parseInt(quarter.dataset.quarter);
    
    // Check if the course can be placed (only check for MSc spanning beyond calendar)
    if (!canPlaceCourse(year, quarterNum, draggedCourse.type)) {
        alert('Cannot place course here. MSc courses span 2 quarters and would extend beyond the calendar.');
        return;
    }
    
    // Place the course
    placeCourse(year, quarterNum, draggedCourse);
    renderPlacedCourses();
    savePlan();
}

// Check if a course can be placed in the given quarter
// Now only checks if MSc courses would span beyond the calendar
function canPlaceCourse(year, quarter, type) {
    // For MSc courses, check if the next quarter exists
    if (type === 'msc') {
        let nextYear = year;
        let nextQuarter = quarter + 1;
        
        if (nextQuarter > 4) {
            nextQuarter = 1;
            nextYear += 1;
        }
        
        // Check if next quarter exists (year 2 is the max)
        if (nextYear > 2) return false;
    }
    
    return true;
}

// Place a course
function placeCourse(year, quarter, course) {
    const key = `${year}-${quarter}`;
    
    // Initialize array if not exists
    if (!placedCourses[key]) {
        placedCourses[key] = [];
    }
    
    const placedCourse = {
        ...course,
        year,
        quarter,
        isStart: true
    };
    
    placedCourses[key].push(placedCourse);
    
    // For MSc courses, also mark the next quarter
    if (course.type === 'msc') {
        let nextYear = year;
        let nextQuarter = quarter + 1;
        
        if (nextQuarter > 4) {
            nextQuarter = 1;
            nextYear += 1;
        }
        
        const key2 = `${nextYear}-${nextQuarter}`;
        
        // Initialize array if not exists
        if (!placedCourses[key2]) {
            placedCourses[key2] = [];
        }
        
        placedCourses[key2].push({
            ...course,
            year: nextYear,
            quarter: nextQuarter,
            isStart: false,
            continuesFrom: key
        });
    }
}

// Check if a course is in the wrong slot based on its timing
function checkWrongSlot(course, quarter) {
    const timing = course.timing || 'S1';
    
    if (course.type === 'msc') {
        // MSc courses span 2 quarters: 
        // S1 courses should start in Q1 (spans Q1-Q2, both in Semester 1)
        // S2 courses should start in Q3 (spans Q3-Q4, both in Semester 2)
        if (course.isStart) {
            if (timing === 'S1') {
                return quarter !== 1; // Must start in Q1 to stay in Semester 1
            } else { // S2
                return quarter !== 3; // Must start in Q3 to stay in Semester 2
            }
        }
        // For continuation (Part 2/2), inherit wrong status from start
        // We check if it's in a wrong position based on expected continuation
        if (!course.isStart) {
            if (timing === 'S1') {
                return quarter !== 2; // Continuation should be in Q2
            } else { // S2
                return quarter !== 4; // Continuation should be in Q4
            }
        }
        return false;
    } else {
        // PhD courses occupy a single quarter
        if (timing === 'Q1') return quarter !== 1;
        if (timing === 'Q2') return quarter !== 2;
        if (timing === 'Q3') return quarter !== 3;
        if (timing === 'Q4') return quarter !== 4;
    }
    
    return false;
}

// Render placed courses in the calendar
function renderPlacedCourses() {
    // Clear all drop zones
    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.innerHTML = '';
        zone.classList.remove('has-courses');
    });
    
    // Place courses
    Object.entries(placedCourses).forEach(([key, coursesInQuarter]) => {
        if (!coursesInQuarter || coursesInQuarter.length === 0) return;
        
        const [year, quarter] = key.split('-').map(Number);
        const quarterElement = document.querySelector(`.quarter[data-year="${year}"][data-quarter="${quarter}"]`);
        if (!quarterElement) return;
        
        const dropZone = quarterElement.querySelector('.drop-zone');
        
        coursesInQuarter.forEach((course) => {
            const isWrong = checkWrongSlot(course, quarter);
            
            const placedElement = document.createElement('div');
            placedElement.className = 'placed-course';
            if (isWrong) {
                placedElement.classList.add('wrong-slot');
            }
            placedElement.dataset.category = course.category;
            placedElement.dataset.placementId = course.placementId;
            placedElement.dataset.key = key;
            
            if (course.type === 'msc' && !course.isStart) {
                placedElement.classList.add('msc-spanning');
            }
            
            const notesClass = showNotes ? '' : 'hidden';
            const notesHtml = course.notes ? `<div class="placed-course-notes ${notesClass}">${formatNotes(course.notes)}</div>` : '';
            
            // Format timing for display
            const timing = course.timing || 'S1';
            let timingLabel = timing;
            if (timing === 'S1') timingLabel = 'Sem 1';
            else if (timing === 'S2') timingLabel = 'Sem 2';
            
            placedElement.innerHTML = `
                <div class="placed-course-name">${escapeHtml(course.name)}</div>
                <div class="placed-course-meta">
                    ${course.category} • ${course.type === 'msc' ? (course.isStart ? 'Part 1/2' : 'Part 2/2') : 'PhD'} • ${timingLabel}
                </div>
                ${notesHtml}
                <div class="placed-course-actions">
                    <button class="edit-notes-btn" data-placement-id="${course.placementId}" data-key="${key}" title="Edit notes">✎</button>
                    <button class="remove-course" data-placement-id="${course.placementId}" data-key="${key}">×</button>
                </div>
            `;
            
            dropZone.appendChild(placedElement);
            
            // Add event listeners
            placedElement.querySelector('.remove-course').addEventListener('click', (e) => {
                e.stopPropagation();
                removeCourse(e.target.dataset.key, e.target.dataset.placementId);
            });
            
            placedElement.querySelector('.edit-notes-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                openNotesModal(e.target.dataset.key, e.target.dataset.placementId);
            });
        });
        
        if (coursesInQuarter.length > 0) {
            dropZone.classList.add('has-courses');
        }
    });
}

// Open notes modal
function openNotesModal(key, placementId) {
    const coursesInQuarter = placedCourses[key];
    if (!coursesInQuarter) return;
    
    const course = coursesInQuarter.find(c => c.placementId === placementId);
    if (!course) return;
    
    editingPlacedCourse = { key, placementId };
    
    document.getElementById('modalCourseName').textContent = course.name;
    document.getElementById('modalNotes').value = course.notes || '';
    document.getElementById('notesModal').classList.add('active');
    document.getElementById('modalNotes').focus();
}

// Close modal
function closeModal() {
    document.getElementById('notesModal').classList.remove('active');
    editingPlacedCourse = null;
}

// Open instructions modal
function openInstructionsModal() {
    document.getElementById('instructionsModal').classList.add('active');
}

// Close instructions modal
function closeInstructionsModal() {
    document.getElementById('instructionsModal').classList.remove('active');
}

// Save notes from modal
function saveNotesFromModal() {
    if (!editingPlacedCourse) return;
    
    const { key, placementId } = editingPlacedCourse;
    const newNotes = document.getElementById('modalNotes').value;
    
    // Update notes for this course and its continuation (if MSc)
    Object.keys(placedCourses).forEach(k => {
        const coursesInQuarter = placedCourses[k];
        if (!coursesInQuarter) return;
        
        coursesInQuarter.forEach(course => {
            if (course.placementId === placementId) {
                course.notes = newNotes;
            }
        });
    });
    
    closeModal();
    renderPlacedCourses();
    savePlan();
}

// Remove a course from the calendar
function removeCourse(key, placementId) {
    const coursesInQuarter = placedCourses[key];
    if (!coursesInQuarter) return;
    
    const courseIndex = coursesInQuarter.findIndex(c => c.placementId === placementId);
    if (courseIndex === -1) return;
    
    const course = coursesInQuarter[courseIndex];
    
    // Remove from current quarter
    placedCourses[key] = coursesInQuarter.filter(c => c.placementId !== placementId);
    if (placedCourses[key].length === 0) {
        delete placedCourses[key];
    }
    
    // If this is an MSc course, also remove from the other quarter
    if (course.type === 'msc') {
        if (course.isStart) {
            // Remove the continuation
            let nextYear = course.year;
            let nextQuarter = course.quarter + 1;
            
            if (nextQuarter > 4) {
                nextQuarter = 1;
                nextYear += 1;
            }
            
            const nextKey = `${nextYear}-${nextQuarter}`;
            if (placedCourses[nextKey]) {
                placedCourses[nextKey] = placedCourses[nextKey].filter(c => c.placementId !== placementId);
                if (placedCourses[nextKey].length === 0) {
                    delete placedCourses[nextKey];
                }
            }
        } else if (course.continuesFrom) {
            // Remove the start
            if (placedCourses[course.continuesFrom]) {
                placedCourses[course.continuesFrom] = placedCourses[course.continuesFrom].filter(c => c.placementId !== placementId);
                if (placedCourses[course.continuesFrom].length === 0) {
                    delete placedCourses[course.continuesFrom];
                }
            }
        }
    }
    
    renderPlacedCourses();
    savePlan();
}

// Add a new course
function addNewCourse() {
    const name = document.getElementById('newCourseName').value.trim();
    const category = document.getElementById('newCourseCategory').value;
    const type = document.getElementById('newCourseType').value;
    const timing = document.getElementById('newCourseTiming').value;
    const notes = document.getElementById('newCourseNotes').value.trim();
    
    if (!name) {
        alert('Please enter a course name');
        return;
    }
    
    if (!timing) {
        alert('Please select a semester/quarter for the course');
        return;
    }
    
    // Generate a unique ID
    const id = 'custom-' + Date.now();
    
    const newCourse = {
        id,
        name,
        category,
        type,
        timing,
        notes
    };
    
    courses.push(newCourse);
    saveCourses();
    renderCourseList();
    
    // Clear the form
    document.getElementById('newCourseName').value = '';
    document.getElementById('newCourseNotes').value = '';
    document.getElementById('newCourseTiming').value = '';
    
    alert(`Course "${name}" added successfully!`);
}

// Handle filter changes
function handleFilterChange(e) {
    const value = e.target.value;
    const isChecked = e.target.checked;
    
    if (value === 'all') {
        if (isChecked) {
            activeFilters = new Set(['all', 'base', 'A', 'B', 'C', 'extra', 'PhD']);
            document.querySelectorAll('.category-filter').forEach(cb => cb.checked = true);
        } else {
            activeFilters.clear();
            document.querySelectorAll('.category-filter').forEach(cb => cb.checked = false);
        }
    } else {
        if (isChecked) {
            activeFilters.add(value);
        } else {
            activeFilters.delete(value);
            activeFilters.delete('all');
            document.querySelector('.category-filter[value="all"]').checked = false;
        }
        
        // Check if all individual filters are selected
        const allSelected = ['base', 'A', 'B', 'C', 'extra', 'PhD'].every(cat => activeFilters.has(cat));
        if (allSelected) {
            activeFilters.add('all');
            document.querySelector('.category-filter[value="all"]').checked = true;
        }
    }
    
    renderCourseList();
}

// Clear the study plan
function clearPlan() {
    if (confirm('Are you sure you want to clear your entire study plan?')) {
        placedCourses = {};
        renderPlacedCourses();
        savePlan();
    }
}

// Save the study plan
function savePlan() {
    localStorage.setItem('placedCourses', JSON.stringify(placedCourses));
    
    // Show a brief confirmation
    const saveBtn = document.getElementById('savePlanBtn');
    const originalText = saveBtn.textContent;
    saveBtn.textContent = '✓ Saved!';
    setTimeout(() => {
        saveBtn.textContent = originalText;
    }, 1500);
}

// Save courses to localStorage
function saveCourses() {
    localStorage.setItem('courses', JSON.stringify(courses));
}

// Initialize the app when the DOM is ready
document.addEventListener('DOMContentLoaded', init);
