import "core-js/stable";

/**
 * Modules
 */
import focusWithin from "focus-within";
import objectFitImages from "object-fit-images";
import { silcCoreInit } from "silc-core";
import { silcAccordionInit } from "silc-accordion";
import modalsInit from "./components/modal";
import siteHeaderInit from "./components/site-header";
import cardsInit from "./components/card";
import subnavInit from "./components/subnav";
import sortableTableInit from "./components/sortable-table";
import privacyConsentInit from "../components/privacy-consent/privacy-consent";
import accordionsInit from "./components/accordion";
import videoEmbedInit from "./components/video-embed";
import ecosystemHeroBackgroundVideo from "./components/ecosystem-home-hero";
import carouselsInit from "./components/carousel";
import homeInit from "./pages/home";
import initCollegeHeroes from "./pages/college-template";
import AccessibilityUtilities from "./utilities/accessibility";
import scrollPaddingTopInit from "./utilities/scroll-padding-top";
import calendarInit from "./components/calendar";
import searchInit from "./components/search";

/**
 * Init
 */
focusWithin(document);
objectFitImages();
AccessibilityUtilities.init();
silcCoreInit();
silcAccordionInit();
siteHeaderInit();
modalsInit();
cardsInit();
privacyConsentInit();
accordionsInit();
subnavInit();
videoEmbedInit();
ecosystemHeroBackgroundVideo();
homeInit();
initCollegeHeroes();
carouselsInit();
scrollPaddingTopInit();
sortableTableInit();
calendarInit();
searchInit();
