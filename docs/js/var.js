function setInitialLanguage() {
    var savedLang = localStorage.getItem('preferredLanguage');
    lang = savedLang || 'en';
    updatePageContent();
}

function saveLanguagePreference() {
    localStorage.setItem('preferredLanguage', lang);
}

var lang = 'en';

var languageText = {
    'en': {
        'aboutUsTitle': 'About TOSEC WORLD',
        'aboutUsShortDescription': 'Owned by several companies, TOSEC WORLD is a company that has been used and trusted for more than 10 years by group companies and their affiliations to recommend accurate commercial feasibility.',
        'aboutUsDescription': '<div class="badan"><h2 id="overview">Overview</h2><p>Owned by several companies, TOSEC WORLD is a company that has been used and trusted for more than 10 years by group companies and their affiliations to recommend accurate commercial feasibility.</p><p>TOSEC WORLD has helped achieve the commercial interests of businesses within the group and its affiliations in accordance with the predetermined targets. As well as consistently encouraging the business world for the sake of sustaining life and economic growth and contributing to future generations.</p><h2 id="our-responsibility">Our Responsibility</h2><p><i>Green Sosial</i> is an original program by TOSEC WORLD and its group companies as a form of support and contribution in helping to advance and prosper the life of the nation. <i>Green Sosial</i> program is implemented in precisely targeted areas, through surveys and studies that are conducted by obtaining primary data first.</p><p>In the application and implementation of the <i>Green Sosial</i> Program, each region has different needs that can encourage progress and prosperity, which depend on the needs of each region. <i>Green Sosial</i> program focuses on developments of human resources, regional economy, education, and health.</p><p>This program provides practice-based knowledge that can be applied directly to create a more advanced and developed regional economy and can help advance, develop and prosper the future generations of the nation.</p><h2 id="tosec-laboratory">Tosec Laboratory</h2><p>Tosec Laboratory is a laboratory system created by TOSEC WORLD based on the needs of its group companies. Tosec Laboratory carries out research and data processing, the data of which results from primary and secondary data research carried out by a team of experts in various fields, therefore Tosec Laboratory can create original formulations in designing systems that are appropriate, feasible and applicable.</p><p>Tosec Laboratory has an important role in the Green Sosial Program in creating patterns to meet demands. Designing a teaching curriculum and designing a business that is properly tailored to the needs of a region, to achieve the objectives of the Green Sosial Program.</p></div>'
    },
    'id': {
        'aboutUsTitle': 'Tentang TOSEC WORLD',
        'aboutUsShortDescription': 'TOSEC WORLD adalah perusahaan yang dimiliki oleh beberapa perusahaan, yang mana TOSEC WORLD telah dipergunakan dan dipercaya lebih dari 10 tahun oleh perusahaan-perusahaan group dan partnernya untuk merekomendasikan kelayakan secara akurat dalam komersial.',
        'aboutUsDescription': '<div class="badan"><h2 id="overview">Overview</h2><p>Owned by several companies, TOSEC WORLD is a company that has been used and trusted for more than 10 years by group companies and their affiliations to recommend accurate commercial feasibility.</p><p>TOSEC WORLD has helped achieve the commercial interests of businesses within the group and its affiliations in accordance with the predetermined targets. As well as consistently encouraging the business world for the sake of sustaining life and economic growth and contributing to future generations.</p><h2 id="our-responsibility">Our Responsibility</h2><p><i>Green Sosial</i> is an original program by TOSEC WORLD and its group companies as a form of support and contribution in helping to advance and prosper the life of the nation. <i>Green Sosial</i> program is implemented in precisely targeted areas, through surveys and studies that are conducted by obtaining primary data first.</p><p>In the application and implementation of the <i>Green Sosial</i> Program, each region has different needs that can encourage progress and prosperity, which depend on the needs of each region. <i>Green Sosial</i> program focuses on developments of human resources, regional economy, education, and health.</p><p>This program provides practice-based knowledge that can be applied directly to create a more advanced and developed regional economy and can help advance, develop and prosper the future generations of the nation.</p><h2 id="tosec-laboratory">Tosec Laboratory</h2><p>Tosec Laboratory is a laboratory system created by TOSEC WORLD based on the needs of its group companies. Tosec Laboratory carries out research and data processing, the data of which results from primary and secondary data research carried out by a team of experts in various fields, therefore Tosec Laboratory can create original formulations in designing systems that are appropriate, feasible and applicable.</p><p>Tosec Laboratory has an important role in the Green Sosial Program in creating patterns to meet demands. Designing a teaching curriculum and designing a business that is properly tailored to the needs of a region, to achieve the objectives of the Green Sosial Program.</p></div>'
    }
};

function updatePageContent() {
    var aboutUsElement = document.getElementById('about-us');

    if (lang === 'id') {
        aboutUsElement.textContent = languageText.id.aboutUs;
    } else {
        aboutUsElement.textContent = languageText.en.aboutUs;
    }

    saveLanguagePreference();
}

document.getElementById('en-us').addEventListener('click', function (event) {
    event.preventDefault();
    lang = 'en';
    updatePageContent();
});

document.getElementById('id-id').addEventListener('click', function (event) {
    event.preventDefault();
    lang = 'id';
    updatePageContent();
});

setInitialLanguage();