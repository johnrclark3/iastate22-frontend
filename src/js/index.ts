/**
 * Modules
 */
import focusWithin from "focus-within";
import * as objectFitImages from "object-fit-images";

import { silcCoreInit } from "silc-core";
import { silcAccordionInit } from "silc-accordion";
import { silcNavInit } from "silc-nav";
import { SilcCarouselInit } from "../components/carousel/carousel";
import Tablesaw from "../components/table/table";
import Modal from "../components/modal/modal";
import lazyLoadInit from "../components/lazyload/_lazyload";
import cardsInit from "../components/card/card";
import privacyConsentInit from "../components/privacy-consent/privacy-consent";
import accordionsInit from "./components/accordion";
import videoEmbedInit from "./components/video-embed";

/**
 * Init
 */
focusWithin(document);
objectFitImages();
silcCoreInit();
silcAccordionInit();
silcNavInit();
SilcCarouselInit();
Tablesaw.init();
Modal.init();
lazyLoadInit();
cardsInit();
privacyConsentInit();
accordionsInit();
videoEmbedInit();

/**
 * Example VueJS app
 */
import { vueAppInit } from "./vue-app";
vueAppInit("#vue-app");
