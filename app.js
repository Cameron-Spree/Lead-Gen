const STORAGE_KEY = "websiteLeadWorkflow.v1";

const statusOptions = [
  "New",
  "Audited",
  "Qualified",
  "Preview Built",
  "Emailed",
  "Replied",
  "Call Booked",
  "Won",
  "Lost",
  "Do Not Contact"
];

const csvHeaders = [
  "Status",
  "Business Name",
  "Category",
  "City",
  "Website",
  "Email",
  "Phone",
  "Source",
  "Source URL",
  "Place ID",
  "Current Site Score",
  "Has Website",
  "Mobile Friendly",
  "HTTPS",
  "Clear CTA",
  "Contact Form",
  "Looks Outdated",
  "Broken Pages Or Images",
  "Local SEO Basics",
  "Problem Found",
  "Recommended Template",
  "Personalized Pitch Angle",
  "Preview URL",
  "Email Sent Date",
  "Follow Up Date",
  "Reply",
  "Next Action",
  "Notes"
];

const defaultTemplates = [
  {
    id: "barber-clean",
    name: "Barber / Salon",
    niche: "Beauty and personal care",
    angle: "Turn walk-ins into bookings with a mobile-first services page.",
    primaryService: "cuts, styling, and appointments",
    placeholders: [
      "{{business_name}}",
      "{{city}}",
      "{{primary_service}}",
      "{{phone}}",
      "{{booking_cta}}",
      "{{review_snippet}}"
    ],
    palette: ["#17202a", "#146c6f", "#f4f0ea"]
  },
  {
    id: "trades-fast-quote",
    name: "Trades / Contractor",
    niche: "Plumbers, electricians, roofers, landscapers",
    angle: "Make quote requests obvious and build trust quickly.",
    primaryService: "reliable local repairs and installations",
    placeholders: [
      "{{business_name}}",
      "{{city}}",
      "{{service_area}}",
      "{{primary_service}}",
      "{{quote_cta}}",
      "{{emergency_phone}}"
    ],
    palette: ["#26323f", "#d96f32", "#f6f7f9"]
  },
  {
    id: "cafe-neighbourhood",
    name: "Cafe / Restaurant",
    niche: "Food, drink, hospitality",
    angle: "Show hours, menu, location, and atmosphere immediately.",
    primaryService: "fresh food, drinks, and local hospitality",
    placeholders: [
      "{{business_name}}",
      "{{city}}",
      "{{opening_hours}}",
      "{{menu_link}}",
      "{{reservation_cta}}",
      "{{signature_item}}"
    ],
    palette: ["#20272b", "#b85c38", "#f7efe4"]
  },
  {
    id: "cleaner-trust",
    name: "Cleaner / Home Services",
    niche: "Domestic and commercial cleaning",
    angle: "Emphasize trust, recurring plans, and simple enquiries.",
    primaryService: "home and commercial cleaning",
    placeholders: [
      "{{business_name}}",
      "{{city}}",
      "{{service_area}}",
      "{{primary_service}}",
      "{{trust_badge}}",
      "{{quote_cta}}"
    ],
    palette: ["#13343b", "#34a0a4", "#f5fbfa"]
  },
  {
    id: "fitness-coach",
    name: "Gym / Fitness Coach",
    niche: "Fitness studios, coaches, PTs",
    angle: "Sell the transformation and make trial bookings frictionless.",
    primaryService: "coaching, classes, and training plans",
    placeholders: [
      "{{business_name}}",
      "{{city}}",
      "{{primary_service}}",
      "{{trial_cta}}",
      "{{programs}}",
      "{{social_proof}}"
    ],
    palette: ["#121826", "#db4d3f", "#f8fafc"]
  },
  {
    id: "clinic-calm",
    name: "Clinic / Dental",
    niche: "Clinics, dentists, health practices",
    angle: "Calm, credible pages with service clarity and booking prompts.",
    primaryService: "appointments and patient care",
    placeholders: [
      "{{business_name}}",
      "{{city}}",
      "{{primary_service}}",
      "{{booking_cta}}",
      "{{patient_note}}",
      "{{phone}}"
    ],
    palette: ["#20303f", "#2f8f83", "#eef7f4"]
  }
];

const defaultLeads = [
  {
    id: makeId("lead"),
    status: "Qualified",
    businessName: "Clifton Cut Studio",
    category: "Barber",
    city: "Bristol",
    website: "",
    email: "hello@example-barber.co.uk",
    phone: "0117 000 0000",
    source: "Sample",
    sourceUrl: "",
    placeId: "",
    currentSiteScore: 2,
    hasWebsite: "No",
    mobileFriendly: "Unknown",
    https: "Unknown",
    clearCta: "No",
    contactForm: "No",
    looksOutdated: "Yes",
    brokenPagesOrImages: "Unknown",
    localSeoBasics: "No",
    problemFound: "No website showing for appointment booking.",
    recommendedTemplate: "barber-clean",
    personalizedPitchAngle: "A simple booking-first mobile site could capture more local searches.",
    previewUrl: "",
    emailSentDate: "",
    followUpDate: "",
    reply: "",
    nextAction: "Build preview",
    notes: "Good fit for first outreach batch."
  },
  {
    id: makeId("lead"),
    status: "Audited",
    businessName: "Harbourside Plumbing",
    category: "Plumber",
    city: "Bristol",
    website: "https://example.com",
    email: "",
    phone: "0117 111 1111",
    source: "Sample",
    sourceUrl: "",
    placeId: "",
    currentSiteScore: 4,
    hasWebsite: "Yes",
    mobileFriendly: "No",
    https: "Yes",
    clearCta: "No",
    contactForm: "Yes",
    looksOutdated: "Yes",
    brokenPagesOrImages: "No",
    localSeoBasics: "No",
    problemFound: "Website is hard to use on mobile and has no emergency call CTA.",
    recommendedTemplate: "trades-fast-quote",
    personalizedPitchAngle: "A clearer quote page and emergency phone CTA would likely convert more visitors.",
    previewUrl: "",
    emailSentDate: "",
    followUpDate: "",
    reply: "",
    nextAction: "Find owner email",
    notes: ""
  },
  {
    id: makeId("lead"),
    status: "Preview Built",
    businessName: "North Street Coffee",
    category: "Cafe",
    city: "Bristol",
    website: "https://example.org",
    email: "manager@example-cafe.co.uk",
    phone: "",
    source: "Sample",
    sourceUrl: "",
    placeId: "",
    currentSiteScore: 5,
    hasWebsite: "Yes",
    mobileFriendly: "Yes",
    https: "Yes",
    clearCta: "No",
    contactForm: "No",
    looksOutdated: "No",
    brokenPagesOrImages: "No",
    localSeoBasics: "Partial",
    problemFound: "Menu and opening hours are buried.",
    recommendedTemplate: "cafe-neighbourhood",
    personalizedPitchAngle: "A cleaner menu and location page would help people decide faster.",
    previewUrl: "Generated in app",
    emailSentDate: "",
    followUpDate: "",
    reply: "",
    nextAction: "Send outreach",
    notes: ""
  }
];

let state = loadState();
let discoveryResults = [];
let lastPreviewHtml = "";

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  bindEvents();
  hydrateForms();
  renderAll();
  generateInitialPreview();
});

function cacheElements() {
  [
    "tabList",
    "pageTitle",
    "resetDemoButton",
    "exportAllButton",
    "discoveryForm",
    "discoveryMode",
    "googleApiKey",
    "industryInput",
    "cityInput",
    "countryInput",
    "resultLimit",
    "saveDiscoverySettings",
    "discoveryResults",
    "discoveryCount",
    "csvImport",
    "exportCsvButton",
    "quickAddForm",
    "quickName",
    "quickCategory",
    "quickCity",
    "quickWebsite",
    "leadTableBody",
    "templateGrid",
    "exportTemplatesButton",
    "populateForm",
    "populateLeadSelect",
    "populateTemplateSelect",
    "populateOffer",
    "populatePrice",
    "generatedCopy",
    "downloadPreviewButton",
    "sitePreview",
    "outreachSettingsForm",
    "senderName",
    "fromEmail",
    "calendarLink",
    "physicalAddress",
    "defaultCta",
    "outreachLeadSelect",
    "emailSubject",
    "emailBody",
    "generateEmailButton",
    "copyEmailButton",
    "mailtoButton",
    "markEmailedButton",
    "metricsGrid",
    "pipelineFilter",
    "pipelineBoard",
    "toast"
  ].forEach((id) => {
    els[id] = document.getElementById(id);
  });
}

function bindEvents() {
  els.tabList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-tab]");
    if (!button) return;
    setActiveTab(button.dataset.tab);
  });

  els.discoveryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    runDiscovery();
  });

  els.saveDiscoverySettings.addEventListener("click", () => {
    saveDiscoverySettings();
    showToast("Discovery setup saved.");
  });

  els.resetDemoButton.addEventListener("click", () => {
    if (!window.confirm("Reset demo leads, templates, and settings?")) return;
    localStorage.removeItem(STORAGE_KEY);
    state = loadState();
    hydrateForms();
    renderAll();
    generateInitialPreview();
    showToast("Demo data restored.");
  });

  els.exportAllButton.addEventListener("click", () => downloadLeadsCsv());
  els.exportCsvButton.addEventListener("click", () => downloadLeadsCsv());
  els.exportTemplatesButton.addEventListener("click", () => downloadTemplateNotes());

  els.csvImport.addEventListener("change", handleCsvImport);

  els.quickAddForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addLead({
      status: "New",
      businessName: els.quickName.value.trim(),
      category: els.quickCategory.value.trim(),
      city: els.quickCity.value.trim(),
      website: els.quickWebsite.value.trim(),
      source: "Manual",
      currentSiteScore: "",
      hasWebsite: els.quickWebsite.value.trim() ? "Yes" : "No",
      nextAction: "Audit website"
    });
    els.quickAddForm.reset();
  });

  els.populateForm.addEventListener("submit", (event) => {
    event.preventDefault();
    generatePreview();
  });

  els.downloadPreviewButton.addEventListener("click", () => {
    if (!lastPreviewHtml) {
      showToast("Generate a preview first.");
      return;
    }
    const lead = getSelectedLead(els.populateLeadSelect);
    const filename = `${slugify(lead?.businessName || "website-preview")}-preview.html`;
    downloadFile(filename, lastPreviewHtml, "text/html");
  });

  els.outreachSettingsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    saveOutreachSettings();
    showToast("Email setup saved.");
  });

  els.generateEmailButton.addEventListener("click", generateEmail);
  els.copyEmailButton.addEventListener("click", copyEmail);
  els.mailtoButton.addEventListener("click", openMailDraft);
  els.markEmailedButton.addEventListener("click", markSelectedLeadEmailed);
  els.pipelineFilter.addEventListener("change", renderPipeline);
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      return {
        leads: parsed.leads?.length ? parsed.leads : structuredClone(defaultLeads),
        templates: parsed.templates?.length ? parsed.templates : structuredClone(defaultTemplates),
        discoverySettings: {
          mode: "mock",
          apiKey: "",
          industry: "barber",
          city: "Bristol",
          country: "GB",
          limit: 8,
          ...(parsed.discoverySettings || {})
        },
        outreachSettings: {
          senderName: "Your Web Studio",
          fromEmail: "hello@example.com",
          calendarLink: "",
          physicalAddress: "",
          defaultCta: "Worth me sending over the details?",
          ...(parsed.outreachSettings || {})
        }
      };
    } catch (error) {
      console.warn("Could not load saved state", error);
    }
  }

  return {
    leads: structuredClone(defaultLeads),
    templates: structuredClone(defaultTemplates),
    discoverySettings: {
      mode: "mock",
      apiKey: "",
      industry: "barber",
      city: "Bristol",
      country: "GB",
      limit: 8
    },
    outreachSettings: {
      senderName: "Your Web Studio",
      fromEmail: "hello@example.com",
      calendarLink: "",
      physicalAddress: "",
      defaultCta: "Worth me sending over the details?"
    }
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function hydrateForms() {
  const discovery = state.discoverySettings;
  els.discoveryMode.value = discovery.mode;
  els.googleApiKey.value = discovery.apiKey;
  els.industryInput.value = discovery.industry;
  els.cityInput.value = discovery.city;
  els.countryInput.value = discovery.country;
  els.resultLimit.value = discovery.limit;

  const outreach = state.outreachSettings;
  els.senderName.value = outreach.senderName;
  els.fromEmail.value = outreach.fromEmail;
  els.calendarLink.value = outreach.calendarLink;
  els.physicalAddress.value = outreach.physicalAddress;
  els.defaultCta.value = outreach.defaultCta;
}

function setActiveTab(tab) {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tab);
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === `tab-${tab}`);
  });
  const titles = {
    discovery: "Lead discovery setup",
    leads: "Lead table and CSV",
    templates: "Template library",
    populate: "Auto-populate previews",
    outreach: "Outreach setup",
    sales: "Sales pipeline"
  };
  els.pageTitle.textContent = titles[tab] || "Website Leads";
}

function renderAll() {
  renderDiscoveryResults();
  renderLeadTable();
  renderTemplates();
  renderSelects();
  renderMetrics();
  renderPipeline();
}

function saveDiscoverySettings() {
  state.discoverySettings = {
    mode: els.discoveryMode.value,
    apiKey: els.googleApiKey.value.trim(),
    industry: els.industryInput.value.trim(),
    city: els.cityInput.value.trim(),
    country: els.countryInput.value,
    limit: Number(els.resultLimit.value) || 8
  };
  saveState();
}

async function runDiscovery() {
  saveDiscoverySettings();
  const settings = state.discoverySettings;
  setDiscoveryLoading(true);

  try {
    if (settings.mode === "places") {
      if (!settings.apiKey) {
        showToast("Add a Google API key first, or use demo mode.");
        discoveryResults = [];
      } else {
        discoveryResults = await runGooglePlacesDiscovery(settings);
      }
    } else {
      discoveryResults = makeMockDiscovery(settings);
    }
  } catch (error) {
    console.error(error);
    showToast(error.message || "Discovery failed. Check your API key/settings.");
    discoveryResults = [];
  } finally {
    setDiscoveryLoading(false);
    renderDiscoveryResults();
  }
}

function setDiscoveryLoading(isLoading) {
  const submit = els.discoveryForm.querySelector("button[type='submit']");
  submit.disabled = isLoading;
  submit.textContent = isLoading ? "Searching..." : "Run discovery";
}

function makeMockDiscovery(settings) {
  const industry = settings.industry || "business";
  const city = settings.city || "your city";
  const names = [
    `${titleCase(city)} ${titleCase(industry)} Co.`,
    `The Local ${titleCase(industry)}`,
    `${titleCase(industry)} House ${titleCase(city)}`,
    `Northside ${titleCase(industry)}`,
    `${titleCase(city)} High Street ${titleCase(industry)}`,
    `Prime ${titleCase(industry)} Services`,
    `Little Lane ${titleCase(industry)}`,
    `${titleCase(city)} Family ${titleCase(industry)}`
  ];

  return names.slice(0, Number(settings.limit) || 8).map((name, index) => ({
    id: makeId("candidate"),
    businessName: name,
    category: titleCase(industry),
    city,
    website: index % 3 === 0 ? "" : `https://example-${index + 1}.co.uk`,
    email: "",
    phone: index % 2 === 0 ? `0117 000 00${index}` : "",
    source: "Mock discovery",
    sourceUrl: "",
    placeId: "",
    currentSiteScore: index % 3 === 0 ? 1 : 4,
    problemFound: index % 3 === 0 ? "No website found." : "Website likely needs manual audit.",
    recommendedTemplate: suggestTemplate(industry),
    personalizedPitchAngle: "Create a quick preview and lead with the clearest visible improvement.",
    nextAction: "Audit website"
  }));
}

async function runGooglePlacesDiscovery(settings) {
  await loadGoogleMaps(settings.apiKey);

  const serviceElement = document.createElement("div");
  const service = new google.maps.places.PlacesService(serviceElement);
  const query = `${settings.industry} in ${settings.city}`;

  const textResults = await placesTextSearch(service, {
    query,
    region: settings.country?.toLowerCase()
  });

  const limited = textResults.slice(0, Number(settings.limit) || 8);
  const detailed = [];

  for (const place of limited) {
    const details = await placeDetails(service, place.place_id);
    detailed.push({
      id: makeId("candidate"),
      businessName: details.name || place.name || "",
      category: titleCase(settings.industry),
      city: settings.city,
      website: details.website || "",
      email: "",
      phone: details.formatted_phone_number || "",
      source: "Google Places API",
      sourceUrl: details.url || "",
      placeId: details.place_id || place.place_id || "",
      currentSiteScore: details.website ? "" : 1,
      problemFound: details.website ? "Website found. Needs manual audit." : "No website returned by Places details.",
      recommendedTemplate: suggestTemplate(settings.industry),
      personalizedPitchAngle: details.website
        ? "Audit the current site before pitching."
        : "No website appeared in the Places result, so a simple starter site may be relevant.",
      nextAction: details.website ? "Audit website" : "Confirm contact details"
    });
    await wait(160);
  }

  return detailed;
}

function loadGoogleMaps(apiKey) {
  if (window.google?.maps?.places) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const callbackName = "__placesReady";
    const existing = document.querySelector("script[data-google-places]");
    window[callbackName] = () => resolve();

    if (existing) {
      existing.addEventListener("load", resolve, { once: true });
      existing.addEventListener("error", () => reject(new Error("Google Places script failed to load.")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.dataset.googlePlaces = "true";
    script.async = true;
    script.defer = true;
    script.onerror = () => reject(new Error("Google Places script failed to load."));
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places&v=weekly&callback=${callbackName}`;
    document.head.appendChild(script);
  });
}

function placesTextSearch(service, request) {
  return new Promise((resolve, reject) => {
    service.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        resolve(results || []);
        return;
      }
      if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
        resolve([]);
        return;
      }
      reject(new Error(`Places text search returned ${status}.`));
    });
  });
}

function placeDetails(service, placeId) {
  return new Promise((resolve) => {
    service.getDetails(
      {
        placeId,
        fields: ["place_id", "name", "website", "formatted_phone_number", "url"]
      },
      (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          resolve(place || {});
          return;
        }
        resolve({ place_id: placeId });
      }
    );
  });
}

function renderDiscoveryResults() {
  els.discoveryCount.textContent = `${discoveryResults.length} result${discoveryResults.length === 1 ? "" : "s"}`;
  if (!discoveryResults.length) {
    els.discoveryResults.innerHTML = `<tr><td colspan="6" class="empty-state">Run discovery to see candidates here.</td></tr>`;
    return;
  }

  els.discoveryResults.innerHTML = discoveryResults
    .map((candidate) => {
      const website = candidate.website
        ? `<a href="${escapeAttr(candidate.website)}" target="_blank" rel="noreferrer">${escapeHtml(candidate.website)}</a>`
        : `<span class="status-pill lost">No website</span>`;
      return `
        <tr>
          <td><strong>${escapeHtml(candidate.businessName)}</strong><br><span class="muted">${escapeHtml(candidate.category || "")}</span></td>
          <td>${escapeHtml(candidate.city || "")}</td>
          <td>${website}</td>
          <td>${escapeHtml(candidate.phone || "")}</td>
          <td>${escapeHtml(candidate.problemFound || "")}</td>
          <td><button class="ghost-button" type="button" data-add-candidate="${candidate.id}">Add lead</button></td>
        </tr>
      `;
    })
    .join("");

  els.discoveryResults.querySelectorAll("[data-add-candidate]").forEach((button) => {
    button.addEventListener("click", () => {
      const candidate = discoveryResults.find((item) => item.id === button.dataset.addCandidate);
      if (!candidate) return;
      addLead({ ...candidate, status: "New" });
    });
  });
}

function addLead(partial) {
  const lead = normalizeLead({
    id: makeId("lead"),
    status: "New",
    businessName: "",
    category: "",
    city: "",
    website: "",
    email: "",
    phone: "",
    source: "",
    sourceUrl: "",
    placeId: "",
    currentSiteScore: "",
    hasWebsite: "",
    mobileFriendly: "Unknown",
    https: "Unknown",
    clearCta: "Unknown",
    contactForm: "Unknown",
    looksOutdated: "Unknown",
    brokenPagesOrImages: "Unknown",
    localSeoBasics: "Unknown",
    problemFound: "",
    recommendedTemplate: suggestTemplate(partial.category || ""),
    personalizedPitchAngle: "",
    previewUrl: "",
    emailSentDate: "",
    followUpDate: "",
    reply: "",
    nextAction: "",
    notes: "",
    ...partial
  });
  state.leads.unshift(lead);
  saveState();
  renderAll();
  showToast(`${lead.businessName || "Lead"} added.`);
}

function renderLeadTable() {
  if (!state.leads.length) {
    els.leadTableBody.innerHTML = `<tr><td colspan="10" class="empty-state">No leads yet. Add one manually or from discovery.</td></tr>`;
    return;
  }

  els.leadTableBody.innerHTML = state.leads
    .map((lead) => `
      <tr data-lead-row="${lead.id}">
        <td>${statusSelect(lead)}</td>
        <td><input data-field="businessName" value="${escapeAttr(lead.businessName)}"></td>
        <td><input data-field="category" value="${escapeAttr(lead.category)}"></td>
        <td><input data-field="city" value="${escapeAttr(lead.city)}"></td>
        <td><input data-field="website" value="${escapeAttr(lead.website)}"></td>
        <td><input data-field="email" value="${escapeAttr(lead.email)}"></td>
        <td><input data-field="currentSiteScore" type="number" min="0" max="10" value="${escapeAttr(String(lead.currentSiteScore ?? ""))}"></td>
        <td><input data-field="problemFound" value="${escapeAttr(lead.problemFound)}"></td>
        <td>${templateSelect(lead)}</td>
        <td><input data-field="nextAction" value="${escapeAttr(lead.nextAction)}"></td>
      </tr>
    `)
    .join("");

  els.leadTableBody.querySelectorAll("input, select").forEach((field) => {
    field.addEventListener("change", handleLeadFieldChange);
    field.addEventListener("blur", handleLeadFieldChange);
  });
}

function statusSelect(lead) {
  return `
    <select data-field="status">
      ${statusOptions.map((status) => `<option value="${escapeAttr(status)}" ${lead.status === status ? "selected" : ""}>${escapeHtml(status)}</option>`).join("")}
    </select>
  `;
}

function templateSelect(lead) {
  return `
    <select data-field="recommendedTemplate">
      <option value="">Choose</option>
      ${state.templates.map((template) => `<option value="${escapeAttr(template.id)}" ${lead.recommendedTemplate === template.id ? "selected" : ""}>${escapeHtml(template.name)}</option>`).join("")}
    </select>
  `;
}

function handleLeadFieldChange(event) {
  const row = event.target.closest("[data-lead-row]");
  if (!row) return;
  const lead = state.leads.find((item) => item.id === row.dataset.leadRow);
  if (!lead) return;
  lead[event.target.dataset.field] = event.target.value;
  saveState();
  renderSelects();
  renderMetrics();
  renderPipeline();
}

function renderTemplates() {
  els.templateGrid.innerHTML = state.templates
    .map((template) => `
      <article class="template-card">
        <div>
          <h4>${escapeHtml(template.name)}</h4>
          <p>${escapeHtml(template.niche)}</p>
        </div>
        <p>${escapeHtml(template.angle)}</p>
        <div class="token-list">
          ${template.placeholders.map((token) => `<span class="token">${escapeHtml(token)}</span>`).join("")}
        </div>
        <button class="ghost-button" type="button" data-template-preview="${template.id}">Use in auto-populate</button>
      </article>
    `)
    .join("");

  els.templateGrid.querySelectorAll("[data-template-preview]").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveTab("populate");
      els.populateTemplateSelect.value = button.dataset.templatePreview;
      generatePreview();
    });
  });
}

function renderSelects() {
  const leadOptions = state.leads
    .map((lead) => `<option value="${escapeAttr(lead.id)}">${escapeHtml(lead.businessName || "Unnamed lead")} - ${escapeHtml(lead.city || "No city")}</option>`)
    .join("");

  const templateOptions = state.templates
    .map((template) => `<option value="${escapeAttr(template.id)}">${escapeHtml(template.name)}</option>`)
    .join("");

  const previousPopulateLead = els.populateLeadSelect.value;
  const previousTemplate = els.populateTemplateSelect.value;
  const previousOutreachLead = els.outreachLeadSelect.value;

  els.populateLeadSelect.innerHTML = leadOptions;
  els.outreachLeadSelect.innerHTML = leadOptions;
  els.populateTemplateSelect.innerHTML = templateOptions;

  if (state.leads.some((lead) => lead.id === previousPopulateLead)) {
    els.populateLeadSelect.value = previousPopulateLead;
  }
  if (state.leads.some((lead) => lead.id === previousOutreachLead)) {
    els.outreachLeadSelect.value = previousOutreachLead;
  }
  if (state.templates.some((template) => template.id === previousTemplate)) {
    els.populateTemplateSelect.value = previousTemplate;
  }
}

function generateInitialPreview() {
  if (state.leads.length && state.templates.length) {
    generatePreview({ saveToLead: false });
    generateEmail();
  }
}

function generatePreview(options = {}) {
  const { saveToLead = true } = options;
  const lead = getSelectedLead(els.populateLeadSelect);
  const template = getSelectedTemplate();
  if (!lead || !template) {
    showToast("Add a lead and template first.");
    return;
  }

  const offer = els.populateOffer.value.trim();
  const price = els.populatePrice.value.trim();
  const merged = buildMergeData(lead, template, offer, price);
  lastPreviewHtml = buildPreviewHtml(merged, template);
  els.sitePreview.srcdoc = lastPreviewHtml;
  els.generatedCopy.value = buildGeneratedCopy(merged);

  if (saveToLead) {
    lead.status = lead.status === "New" || lead.status === "Audited" || lead.status === "Qualified" ? "Preview Built" : lead.status;
    lead.recommendedTemplate = template.id;
    lead.previewUrl = "Generated in app";
    lead.nextAction = "Send outreach";
    saveState();
    renderLeadTable();
    renderMetrics();
    renderPipeline();
    showToast("Preview generated and saved to lead.");
  }
}

function getSelectedLead(select) {
  return state.leads.find((lead) => lead.id === select.value) || state.leads[0];
}

function getSelectedTemplate() {
  return state.templates.find((template) => template.id === els.populateTemplateSelect.value) || state.templates[0];
}

function buildMergeData(lead, template, offer, price) {
  return {
    business_name: lead.businessName || "Your Business",
    city: lead.city || "your area",
    category: lead.category || template.niche,
    primary_service: template.primaryService,
    phone: lead.phone || "Your phone number",
    website: lead.website || "",
    email: lead.email || "",
    booking_cta: "Book now",
    quote_cta: "Request a quote",
    trial_cta: "Book a trial",
    reservation_cta: "Reserve a table",
    service_area: lead.city || "your local area",
    opening_hours: "Open hours shown clearly",
    menu_link: "View menu",
    emergency_phone: lead.phone || "Call now",
    trust_badge: "Trusted local team",
    review_snippet: "Friendly, professional service from a local team.",
    signature_item: "Customer favourites highlighted here.",
    programs: "Classes, coaching, and plans",
    social_proof: "Reviews and testimonials placed near every CTA.",
    patient_note: "Simple appointment information for new patients.",
    problem_found: lead.problemFound || "The current online presence could convert more local visitors.",
    pitch_angle: lead.personalizedPitchAngle || template.angle,
    offer,
    price,
    cta: offer || template.angle
  };
}

function buildPreviewHtml(data, template) {
  const [dark, accent, soft] = template.palette;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(data.business_name)} preview</title>
  <style>
    body { margin: 0; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: ${dark}; background: #ffffff; }
    .hero { min-height: 70vh; display: grid; align-items: center; padding: 48px 7vw; background: linear-gradient(115deg, ${soft}, #fff 60%); }
    .hero-inner { max-width: 980px; }
    .kicker { color: ${accent}; font-weight: 800; text-transform: uppercase; font-size: 0.8rem; }
    h1 { font-size: clamp(2.4rem, 7vw, 5.2rem); line-height: 0.95; margin: 12px 0 18px; letter-spacing: 0; }
    p { font-size: 1.05rem; line-height: 1.55; max-width: 680px; }
    .actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 26px; }
    a { color: inherit; }
    .button { display: inline-flex; align-items: center; min-height: 44px; padding: 0 16px; border-radius: 8px; text-decoration: none; font-weight: 800; }
    .primary { background: ${accent}; color: #fff; }
    .secondary { border: 1px solid rgba(0,0,0,.18); }
    .band { padding: 42px 7vw; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }
    .item { border-top: 3px solid ${accent}; padding-top: 14px; }
    .item h2 { font-size: 1.05rem; margin: 0 0 8px; }
    .item p { font-size: 0.95rem; margin: 0; }
    .footer { padding: 26px 7vw; background: ${dark}; color: #fff; display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
    @media (max-width: 760px) { .band { grid-template-columns: 1fr; } }
  </style>
</head>
<body>
  <main>
    <section class="hero">
      <div class="hero-inner">
        <div class="kicker">${escapeHtml(data.category)} in ${escapeHtml(data.city)}</div>
        <h1>${escapeHtml(data.business_name)}</h1>
        <p>${escapeHtml(data.pitch_angle)}</p>
        <p>${escapeHtml(data.offer)} ${data.price ? `Available ${escapeHtml(data.price)}.` : ""}</p>
        <div class="actions">
          <a class="button primary" href="tel:${escapeAttr(data.phone)}">${escapeHtml(data.phone)}</a>
          <a class="button secondary" href="#contact">${escapeHtml(data.booking_cta || data.quote_cta)}</a>
        </div>
      </div>
    </section>
    <section class="band">
      <article class="item">
        <h2>${escapeHtml(data.primary_service)}</h2>
        <p>Clear services, pricing prompts, and location details for people ready to act.</p>
      </article>
      <article class="item">
        <h2>Built for mobile</h2>
        <p>Fast pages, visible calls to action, and simple contact routes on every screen size.</p>
      </article>
      <article class="item">
        <h2>Local trust</h2>
        <p>${escapeHtml(data.review_snippet || data.trust_badge || data.social_proof)}</p>
      </article>
    </section>
  </main>
  <footer class="footer" id="contact">
    <strong>${escapeHtml(data.business_name)}</strong>
    <span>${escapeHtml(data.city)} | ${escapeHtml(data.phone)}</span>
  </footer>
</body>
</html>`;
}

function buildGeneratedCopy(data) {
  return `Preview concept for ${data.business_name}

Main angle:
${data.pitch_angle}

Offer:
${data.offer}

Key page sections:
- Hero: ${data.business_name} in ${data.city}
- Services: ${data.primary_service}
- Trust: ${data.review_snippet || data.trust_badge || data.social_proof}
- CTA: ${data.phone}

Known opportunity:
${data.problem_found}

Placeholder values used:
{{business_name}} = ${data.business_name}
{{city}} = ${data.city}
{{primary_service}} = ${data.primary_service}
{{phone}} = ${data.phone}
{{booking_cta}} = ${data.booking_cta}`;
}

function saveOutreachSettings() {
  state.outreachSettings = {
    senderName: els.senderName.value.trim(),
    fromEmail: els.fromEmail.value.trim(),
    calendarLink: els.calendarLink.value.trim(),
    physicalAddress: els.physicalAddress.value.trim(),
    defaultCta: els.defaultCta.value.trim()
  };
  saveState();
}

function generateEmail() {
  saveOutreachSettings();
  const lead = getSelectedLead(els.outreachLeadSelect);
  if (!lead) return;
  const template = state.templates.find((item) => item.id === lead.recommendedTemplate) || state.templates[0];
  const settings = state.outreachSettings;

  els.emailSubject.value = `Quick website idea for ${lead.businessName}`;
  els.emailBody.value = `Hi ${firstWord(lead.businessName) || "there"},

I came across ${lead.businessName}${lead.city ? ` in ${lead.city}` : ""} and noticed this:

${lead.problemFound || "your website could probably make the next step clearer for visitors."}

We put together a quick example using our ${template.name} layout. The idea is simple: ${lead.personalizedPitchAngle || template.angle}

We build affordable small business sites and can usually turn around a clean first version quickly. ${settings.defaultCta}

${settings.calendarLink ? `Calendar: ${settings.calendarLink}\n` : ""}Thanks,
${settings.senderName}
${settings.fromEmail}
${settings.physicalAddress ? `\n${settings.physicalAddress}` : ""}

If this is not relevant, reply "no thanks" and I will not follow up.`;
}

async function copyEmail() {
  const text = `Subject: ${els.emailSubject.value}\n\n${els.emailBody.value}`;
  try {
    await navigator.clipboard.writeText(text);
    showToast("Email copied.");
  } catch {
    els.emailBody.select();
    document.execCommand("copy");
    showToast("Email body copied.");
  }
}

function openMailDraft() {
  const lead = getSelectedLead(els.outreachLeadSelect);
  if (!lead?.email) {
    showToast("Add an email address for this lead first.");
    return;
  }
  const url = `mailto:${encodeURIComponent(lead.email)}?subject=${encodeURIComponent(els.emailSubject.value)}&body=${encodeURIComponent(els.emailBody.value)}`;
  window.location.href = url;
}

function markSelectedLeadEmailed() {
  const lead = getSelectedLead(els.outreachLeadSelect);
  if (!lead) return;
  lead.status = "Emailed";
  lead.emailSentDate = new Date().toISOString().slice(0, 10);
  lead.followUpDate = addDays(new Date(), 3).toISOString().slice(0, 10);
  lead.nextAction = "Follow up";
  saveState();
  renderAll();
  showToast("Lead marked as emailed.");
}

function renderMetrics() {
  const total = state.leads.length;
  const emailed = state.leads.filter((lead) => lead.status === "Emailed").length;
  const replied = state.leads.filter((lead) => lead.status === "Replied").length;
  const booked = state.leads.filter((lead) => lead.status === "Call Booked").length;
  const won = state.leads.filter((lead) => lead.status === "Won").length;

  const metrics = [
    ["Total", total],
    ["Emailed", emailed],
    ["Replied", replied],
    ["Calls booked", booked],
    ["Won", won]
  ];

  els.metricsGrid.innerHTML = metrics
    .map(([label, value]) => `<div class="metric"><strong>${value}</strong><span>${label}</span></div>`)
    .join("");
}

function renderPipeline() {
  const filter = els.pipelineFilter.value;
  const leads = filter === "all" ? state.leads : state.leads.filter((lead) => lead.status === filter);
  if (!leads.length) {
    els.pipelineBoard.innerHTML = `<div class="empty-state">No leads in this view.</div>`;
    return;
  }
  els.pipelineBoard.innerHTML = leads
    .map((lead) => `
      <article class="pipeline-card">
        <span class="status-pill ${slugify(lead.status)}">${escapeHtml(lead.status)}</span>
        <h4>${escapeHtml(lead.businessName || "Unnamed lead")}</h4>
        <p>${escapeHtml(lead.category || "")}${lead.city ? ` in ${escapeHtml(lead.city)}` : ""}</p>
        <p>${escapeHtml(lead.problemFound || "No audit note yet.")}</p>
        <label>
          Update status
          <select data-pipeline-status="${lead.id}">
            ${statusOptions.map((status) => `<option value="${escapeAttr(status)}" ${lead.status === status ? "selected" : ""}>${escapeHtml(status)}</option>`).join("")}
          </select>
        </label>
      </article>
    `)
    .join("");

  els.pipelineBoard.querySelectorAll("[data-pipeline-status]").forEach((select) => {
    select.addEventListener("change", () => {
      const lead = state.leads.find((item) => item.id === select.dataset.pipelineStatus);
      if (!lead) return;
      lead.status = select.value;
      saveState();
      renderAll();
    });
  });
}

function handleCsvImport(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const rows = parseCsv(String(reader.result || ""));
    if (!rows.length) {
      showToast("No CSV rows found.");
      return;
    }
    const [headers, ...dataRows] = rows;
    const imported = dataRows
      .filter((row) => row.some(Boolean))
      .map((row) => leadFromCsvRow(headers, row));
    state.leads = [...imported, ...state.leads];
    saveState();
    renderAll();
    showToast(`${imported.length} lead${imported.length === 1 ? "" : "s"} imported.`);
    els.csvImport.value = "";
  };
  reader.readAsText(file);
}

function downloadLeadsCsv() {
  const csv = [
    csvHeaders,
    ...state.leads.map((lead) => [
      lead.status,
      lead.businessName,
      lead.category,
      lead.city,
      lead.website,
      lead.email,
      lead.phone,
      lead.source,
      lead.sourceUrl,
      lead.placeId,
      lead.currentSiteScore,
      lead.hasWebsite,
      lead.mobileFriendly,
      lead.https,
      lead.clearCta,
      lead.contactForm,
      lead.looksOutdated,
      lead.brokenPagesOrImages,
      lead.localSeoBasics,
      lead.problemFound,
      lead.recommendedTemplate,
      lead.personalizedPitchAngle,
      lead.previewUrl,
      lead.emailSentDate,
      lead.followUpDate,
      lead.reply,
      lead.nextAction,
      lead.notes
    ])
  ]
    .map((row) => row.map(csvEscape).join(","))
    .join("\n");

  downloadFile("website-leads.csv", csv, "text/csv");
}

function downloadTemplateNotes() {
  const text = state.templates
    .map((template) => {
      return `${template.name}
Niche: ${template.niche}
Angle: ${template.angle}
Primary service: ${template.primaryService}
Placeholders: ${template.placeholders.join(", ")}
`;
    })
    .join("\n---\n\n");

  downloadFile("template-library-notes.txt", text, "text/plain");
}

function leadFromCsvRow(headers, row) {
  const get = (name) => {
    const index = headers.findIndex((header) => header.trim().toLowerCase() === name.toLowerCase());
    return index >= 0 ? row[index] || "" : "";
  };

  return normalizeLead({
    id: makeId("lead"),
    status: get("Status") || "New",
    businessName: get("Business Name"),
    category: get("Category"),
    city: get("City"),
    website: get("Website"),
    email: get("Email"),
    phone: get("Phone"),
    source: get("Source"),
    sourceUrl: get("Source URL"),
    placeId: get("Place ID"),
    currentSiteScore: get("Current Site Score"),
    hasWebsite: get("Has Website"),
    mobileFriendly: get("Mobile Friendly") || "Unknown",
    https: get("HTTPS") || "Unknown",
    clearCta: get("Clear CTA") || "Unknown",
    contactForm: get("Contact Form") || "Unknown",
    looksOutdated: get("Looks Outdated") || "Unknown",
    brokenPagesOrImages: get("Broken Pages Or Images") || "Unknown",
    localSeoBasics: get("Local SEO Basics") || "Unknown",
    problemFound: get("Problem Found"),
    recommendedTemplate: get("Recommended Template"),
    personalizedPitchAngle: get("Personalized Pitch Angle"),
    previewUrl: get("Preview URL"),
    emailSentDate: get("Email Sent Date"),
    followUpDate: get("Follow Up Date"),
    reply: get("Reply"),
    nextAction: get("Next Action"),
    notes: get("Notes")
  });
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && inQuotes && next === '"') {
      field += '"';
      i += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(field);
      field = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
      continue;
    }

    field += char;
  }

  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }

  return rows;
}

function csvEscape(value) {
  const text = String(value ?? "");
  if (/[",\n\r]/.test(text)) {
    return `"${text.replaceAll('"', '""')}"`;
  }
  return text;
}

function normalizeLead(lead) {
  return {
    id: lead.id || makeId("lead"),
    status: lead.status || "New",
    businessName: lead.businessName || "",
    category: lead.category || "",
    city: lead.city || "",
    website: lead.website || "",
    email: lead.email || "",
    phone: lead.phone || "",
    source: lead.source || "",
    sourceUrl: lead.sourceUrl || "",
    placeId: lead.placeId || "",
    currentSiteScore: lead.currentSiteScore ?? "",
    hasWebsite: lead.hasWebsite || (lead.website ? "Yes" : "No"),
    mobileFriendly: lead.mobileFriendly || "Unknown",
    https: lead.https || "Unknown",
    clearCta: lead.clearCta || "Unknown",
    contactForm: lead.contactForm || "Unknown",
    looksOutdated: lead.looksOutdated || "Unknown",
    brokenPagesOrImages: lead.brokenPagesOrImages || "Unknown",
    localSeoBasics: lead.localSeoBasics || "Unknown",
    problemFound: lead.problemFound || "",
    recommendedTemplate: lead.recommendedTemplate || suggestTemplate(lead.category || ""),
    personalizedPitchAngle: lead.personalizedPitchAngle || "",
    previewUrl: lead.previewUrl || "",
    emailSentDate: lead.emailSentDate || "",
    followUpDate: lead.followUpDate || "",
    reply: lead.reply || "",
    nextAction: lead.nextAction || "",
    notes: lead.notes || ""
  };
}

function suggestTemplate(value) {
  const text = String(value || "").toLowerCase();
  if (/barber|salon|hair|beauty/.test(text)) return "barber-clean";
  if (/plumb|electric|roof|landscape|builder|contract|trade/.test(text)) return "trades-fast-quote";
  if (/cafe|coffee|restaurant|food|bar|pub/.test(text)) return "cafe-neighbourhood";
  if (/clean/.test(text)) return "cleaner-trust";
  if (/gym|fitness|coach|personal trainer/.test(text)) return "fitness-coach";
  if (/clinic|dental|dentist|health|physio/.test(text)) return "clinic-calm";
  return "trades-fast-quote";
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function makeId(prefix) {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
}

function titleCase(value) {
  return String(value || "")
    .replace(/[-_]/g, " ")
    .replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
}

function slugify(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "item";
}

function firstWord(value) {
  return String(value || "").trim().split(/\s+/)[0];
}

function addDays(date, days) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => els.toast.classList.remove("show"), 2600);
}
