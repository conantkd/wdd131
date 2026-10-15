const services = [
	{ id: "assessment", category: "pain", number: "01", title: { es: "Valoración de fisioterapia", en: "Physical therapy assessment" }, description: { es: "Un espacio para conversar sobre tus objetivos, revisar tu movimiento y acordar los siguientes pasos con un profesional.", en: "Time to discuss your goals, review your movement, and agree on next steps with a professional." }, detail: { es: "Punto de partida individual", en: "An individual starting point" } },
	{ id: "pain-mobility", category: "pain", number: "02", title: { es: "Dolor y movilidad", en: "Pain and mobility" }, description: { es: "Orientación y ejercicio terapéutico para trabajar la movilidad funcional de acuerdo con una valoración individual.", en: "Guidance and therapeutic exercise to work on functional mobility based on an individual assessment." }, detail: { es: "Plan adaptado a tus actividades", en: "A plan shaped around your activities" } },
	{ id: "rehabilitation", category: "recovery", number: "03", title: { es: "Rehabilitación física", en: "Physical rehabilitation" }, description: { es: "Acompañamiento progresivo para recuperar capacidades después de una lesión o durante un proceso de rehabilitación indicado.", en: "Progressive support to rebuild abilities after an injury or during a recommended rehabilitation process." }, detail: { es: "Progreso revisado en cada etapa", en: "Progress reviewed at every stage" } },
	{ id: "therapeutic-exercise", category: "recovery", number: "04", title: { es: "Ejercicio terapéutico", en: "Therapeutic exercise" }, description: { es: "Práctica guiada y gradual para desarrollar fuerza, control y confianza en movimientos de la vida diaria.", en: "Guided, gradual practice to build strength, control, and confidence in everyday movement." }, detail: { es: "Ejercicios con propósito", en: "Purposeful exercise" } },
	{ id: "prevention", category: "prevention", number: "05", title: { es: "Prevención y educación", en: "Prevention and education" }, description: { es: "Orientación para comprender mejor el movimiento y construir hábitos de actividad física acordes con tus capacidades.", en: "Guidance to better understand movement and build activity habits that fit your abilities." }, detail: { es: "Herramientas para tu rutina", en: "Tools for your routine" } },
	{ id: "home-care", category: "prevention", number: "06", title: { es: "Fisioterapia a domicilio", en: "In-home physical therapy" }, description: { es: "Atención en casa para practicar tareas y movimientos en el entorno donde los necesitas. Cobertura por confirmar.", en: "Care at home to practice tasks and movements in the environment where you need them. Coverage must be confirmed." }, detail: { es: "Bello, Medellín y Envigado", en: "Bello, Medellín, and Envigado" } },
];

const navigation = [
	{ href: "index.html", label: { es: "Inicio", en: "Home" } },
	{ href: "services.html", label: { es: "Servicios", en: "Services" } },
	{ href: "nosotros.html", label: { es: "Nosotros", en: "About" } },
	{ href: "politicas.html", label: { es: "Políticas", en: "Policies" } },
	{ href: "contacto.html", label: { es: "Contacto", en: "Contact" } },
];

const translations = {
	es: { brand: "Fisioterapia", valley: "Valle de Aburrá", appointment: "Atención con cita previa", mainNavigation: "Navegación principal", language: "English", languageLabel: "Cambiar idioma a inglés", menu: "Abrir menú de navegación", footerLine: "Fisioterapia a domicilio en el Valle de Aburrá.", footerLocation: "Bello, Medellín y Envigado", references: "Referencias", copyright: "Todos los derechos reservados.", interestSaved: "Servicio guardado como interés", interestEmpty: "Aún no has guardado un servicio de interés.", choose: "Me interesa", category: { pain: "Dolor y movilidad", recovery: "Rehabilitación", prevention: "Prevención y bienestar" }, formSuccess: "Formulario guardado en este navegador. No se ha enviado.", formRestored: "Se recuperaron los datos guardados en este navegador.", formError: "No se pudo guardar el formulario en este navegador." },
	en: { brand: "Physical Therapy", valley: "Aburrá Valley", appointment: "Visits by appointment", mainNavigation: "Main navigation", language: "Español", languageLabel: "Switch language to Spanish", menu: "Open navigation menu", footerLine: "In-home physical therapy across the Aburrá Valley.", footerLocation: "Bello, Medellín, and Envigado", references: "References", copyright: "All rights reserved.", interestSaved: "Saved service of interest", interestEmpty: "You have not saved a service of interest yet.", choose: "I'm interested", category: { pain: "Pain and mobility", recovery: "Rehabilitation", prevention: "Prevention and wellbeing" }, formSuccess: "Form saved in this browser. It has not been sent.", formRestored: "Saved form details were restored in this browser.", formError: "The form could not be saved in this browser." },
};

const pageTitles = {
	"index.html": { es: "Rema Fisioterapia | Movimiento con propósito", en: "Rema Physical Therapy | Movement with purpose" },
	"services.html": { es: "Servicios | Rema Fisioterapia", en: "Services | Rema Physical Therapy" },
	"nosotros.html": { es: "Nosotros | Rema Fisioterapia", en: "About | Rema Physical Therapy" },
	"politicas.html": { es: "Políticas | Rema Fisioterapia", en: "Policies | Rema Physical Therapy" },
	"contacto.html": { es: "Contacto | Rema Fisioterapia", en: "Contact | Rema Physical Therapy" },
	"referencias.html": { es: "Referencias | Rema Fisioterapia", en: "References | Rema Physical Therapy" },
};

let currentLanguage = localStorage.getItem("rema-language") === "en" ? "en" : "es";
const currentFile = window.location.pathname.split("/").pop() || "index.html";

function renderHeader() {
	const header = document.querySelector("#site-header");
	if (!header) return;
	const links = navigation.map((item) => `
		<li><a href="${item.href}"${currentFile === item.href ? ' aria-current="page"' : ""}>${item.label[currentLanguage]}</a></li>
	`).join("");
	header.innerHTML = `
		<div class="wrap header-inner"><a class="brand" href="index.html" aria-label="Rema ${translations[currentLanguage].brand}"><img src="images/rema-logo.webp" alt="" width="112" height="72"><span>${translations[currentLanguage].brand}<small>${translations[currentLanguage].valley}</small></span></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" aria-label="${translations[currentLanguage].menu}"><span></span><span></span><span></span></button><nav class="navigation" id="primary-navigation" aria-label="${translations[currentLanguage].mainNavigation}"><ul>${links}</ul></nav><button class="language-toggle" type="button" aria-label="${translations[currentLanguage].languageLabel}">ES/EN</button></div>
	`;
	header.querySelector(".language-toggle").addEventListener("click", () => {
		currentLanguage = currentLanguage === "es" ? "en" : "es";
		localStorage.setItem("rema-language", currentLanguage);
		applyLanguage();
	});
	header.querySelector(".menu-toggle").addEventListener("click", (event) => {
		const button = event.currentTarget;
		const expanded = button.getAttribute("aria-expanded") === "true";
		button.setAttribute("aria-expanded", `${!expanded}`);
		header.querySelector("nav").classList.toggle("is-open", !expanded);
	});
}

function renderFooter() {
	const footer = document.querySelector("#site-footer");
	if (!footer) return;
	footer.innerHTML = `<div class="wrap footer-main"><a class="footer-brand" href="index.html">Rema</a><a class="footer-reference" href="referencias.html">${translations[currentLanguage].references}</a><a class="footer-policy" href="politicas.html">${navigation[3].label[currentLanguage]}</a><p class="footer-legal"><span>© ${new Date().getFullYear()} Rema Fisioterapia</span><span>${translations[currentLanguage].copyright}</span></p></div>`;
}

function renderServices() {
	const grid = document.querySelector("#service-grid");
	if (!grid) return;
	const selectedCategory = document.querySelector("#service-filter")?.value || "all";
	const filteredServices = services.filter((service) => selectedCategory === "all" || service.category === selectedCategory);
	const emptyState = document.querySelector("#empty-services");
	if (emptyState) emptyState.hidden = filteredServices.length > 0;
	grid.innerHTML = filteredServices.map((service) => `<article class="service-card card"><div class="service-card-top"><span class="service-number">${service.number}</span></div><h2>${service.title[currentLanguage]}</h2><p>${service.description[currentLanguage]}</p><div class="service-card-bottom"><span>${service.detail[currentLanguage]}</span><button type="button" class="service-select" data-service="${service.id}">${translations[currentLanguage].choose}</button></div></article>`).join("");
	grid.querySelectorAll("[data-service]").forEach((button) => {
		button.addEventListener("click", () => {
			const chosenService = services.find((service) => service.id === button.dataset.service);
			if (!chosenService) return;
			localStorage.setItem("rema-interest", chosenService.id);
			renderInterestNote();
		});
	});
}

function renderInterestNote() {
	const note = document.querySelector("#interest-note");
	if (!note) return;
	const savedService = services.find((service) => service.id === localStorage.getItem("rema-interest"));
	note.textContent = savedService ? `${translations[currentLanguage].interestSaved}: ${savedService.title[currentLanguage]}.` : `${translations[currentLanguage].interestEmpty}`;
}

function applyLanguage() {
	document.documentElement.lang = currentLanguage;
	if (pageTitles[currentFile]) document.title = `${pageTitles[currentFile][currentLanguage]}`;
	document.querySelectorAll("[data-es][data-en]").forEach((element) => { element.textContent = element.dataset[currentLanguage]; });
	document.querySelectorAll("[data-aria-es][data-aria-en]").forEach((element) => { element.setAttribute("aria-label", element.dataset[`aria${currentLanguage === "es" ? "Es" : "En"}`]); });
	document.querySelectorAll("[data-alt-es][data-alt-en]").forEach((element) => { element.alt = element.dataset[`alt${currentLanguage === "es" ? "Es" : "En"}`]; });
	renderHeader();
	renderFooter();
	renderServices();
	renderInterestNote();
	const formService = document.querySelector("#service-interest");
	if (formService) {
		const selectedService = formService.value;
		formService.innerHTML = `<option value="">${currentLanguage === "es" ? "Selecciona un servicio" : "Choose a service"}</option>${services.map((service) => `<option value="${service.id}">${service.title[currentLanguage]}</option>`).join("")}`;
		formService.value = selectedService;
	}
	const formStatus = document.querySelector("#form-status");
	if (formStatus?.dataset.state) formStatus.textContent = translations[currentLanguage][formStatus.dataset.state];
}

function configureForm() {
	const form = document.querySelector("#contact-form");
	const serviceSelect = document.querySelector("#service-interest");
	if (!form || !serviceSelect) return;
	serviceSelect.innerHTML = `<option value="">${currentLanguage === "es" ? "Selecciona un servicio" : "Choose a service"}</option>${services.map((service) => `<option value="${service.id}">${service.title[currentLanguage]}</option>`).join("")}`;
	const savedInterest = localStorage.getItem("rema-interest");
	if (services.find((service) => service.id === savedInterest)) serviceSelect.value = savedInterest;
	const status = document.querySelector("#form-status");
	try {
		const savedForm = JSON.parse(localStorage.getItem("rema-contact-form") || "null");
		if (savedForm && typeof savedForm === "object") {
			for (const name of ["name", "email", "municipality", "message"]) {
				if (typeof savedForm[name] === "string") form.elements[name].value = savedForm[name];
			}
			if (services.some((service) => service.id === savedForm.service)) serviceSelect.value = savedForm.service;
			status.dataset.state = "formRestored";
			status.textContent = translations[currentLanguage].formRestored;
		}
	} catch (error) {
		// Ignore invalid or unavailable browser storage; the form remains usable.
	}
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		if (!form.reportValidity()) return;
		const formData = Object.fromEntries(new FormData(form).entries());
		delete formData.privacy;
		try {
			localStorage.setItem("rema-contact-form", JSON.stringify(formData));
			localStorage.setItem("rema-interest", serviceSelect.value);
			status.dataset.state = "formSuccess";
		} catch (error) {
			status.dataset.state = "formError";
		}
		status.textContent = translations[currentLanguage][status.dataset.state];
	});
}

function configureFaq() {
	const questions = [...document.querySelectorAll(".faq-list details")];
	questions.forEach((question) => {
		question.addEventListener("toggle", () => {
			if (!question.open) return;
			questions.filter((otherQuestion) => otherQuestion !== question && otherQuestion.open).forEach((otherQuestion) => { otherQuestion.open = false; });
		});
	});
}

renderHeader();
renderFooter();
applyLanguage();
configureForm();
configureFaq();
const filter = document.querySelector("#service-filter");
if (filter) filter.addEventListener("change", renderServices);
const year = document.querySelector("#currentyear");
if (year) year.textContent = `${new Date().getFullYear()}`;
const lastModified = document.querySelector("#lastModified");
if (lastModified) lastModified.textContent = `Last modification: ${document.lastModified}`;
