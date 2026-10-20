// One-colour versions of every logo (black on transparent, white details cut
// out as holes), made from the originals for the looks that show logos in a
// single colour. Keyed by the logo's alt text in sections.ts.
import type { ImageMetadata } from "astro";
import m_incredible from "../assets/logos/mono/incredible.png";
import m_cellmark from "../assets/logos/mono/cellmark.png";
import m_spintop from "../assets/logos/mono/spintop.png";
import m_starbright from "../assets/logos/mono/starbright.png";
import m_product_hunt from "../assets/logos/mono/product-hunt.png";
import m_gro36 from "../assets/logos/mono/gro36.png";
import m_glitched from "../assets/logos/mono/glitched.png";
import m_linkoping_university from "../assets/logos/mono/linkoping-university.png";
import m_viss_ai from "../assets/logos/mono/viss-ai.png";
import m_foretagarna from "../assets/logos/mono/foretagarna.png";
import m_almi from "../assets/logos/mono/almi.png";
import m_techbbq from "../assets/logos/mono/techbbq.png";
import m_web_summit from "../assets/logos/mono/web-summit.png";
import m_skapa from "../assets/logos/mono/skapa.png";
import m_norditech from "../assets/logos/mono/norditech.png";
import m_toyota from "../assets/logos/mono/toyota.png";
import m_eboss from "../assets/logos/mono/eboss.png";
import m_wheelscanning from "../assets/logos/mono/wheelscanning.png";
import m_saab from "../assets/logos/mono/saab.png";
import m_rapid_dimension from "../assets/logos/mono/rapid-dimension.png";
import m_quickset from "../assets/logos/mono/quickset.png";
import m_3temp from "../assets/logos/mono/3temp.png";
import m_fcproduction from "../assets/logos/mono/fcproduction.png";
import m_robowaste from "../assets/logos/mono/robowaste.png";
import m_vattenfall from "../assets/logos/mono/vattenfall.png";
import m_tekniska_verken from "../assets/logos/mono/tekniska-verken.png";
import m_umea_energi from "../assets/logos/mono/umea-energi.png";
import m_science_park from "../assets/logos/mono/science-park.png";
import m_ung_foretagsamhet from "../assets/logos/mono/ung-foretagsamhet.png";
import m_ljusgarda from "../assets/logos/mono/ljusgarda.png";
import m_ungdrive from "../assets/logos/mono/ungdrive.png";

export const MONO: Record<string, ImageMetadata> = {
  "Incredible": m_incredible,
  "CellMark": m_cellmark,
  "Spintop Ventures": m_spintop,
  "Starbright Invest": m_starbright,
  "Product Hunt": m_product_hunt,
  "GRO36": m_gro36,
  "Glitched": m_glitched,
  "Linköping University": m_linkoping_university,
  "VISS.AI": m_viss_ai,
  "Företagarna": m_foretagarna,
  "Almi": m_almi,
  "TechBBQ": m_techbbq,
  "Web Summit": m_web_summit,
  "SKAPA": m_skapa,
  "Norditech": m_norditech,
  "Toyota Material Handling": m_toyota,
  "Eboss": m_eboss,
  "Wheelscanning": m_wheelscanning,
  "Saab": m_saab,
  "Rapid Dimension": m_rapid_dimension,
  "Quick-set": m_quickset,
  "3TEMP": m_3temp,
  "FC Production": m_fcproduction,
  "RoboWaste": m_robowaste,
  "Vattenfall": m_vattenfall,
  "Tekniska verken": m_tekniska_verken,
  "Umeå Energi": m_umea_energi,
  "Science Park Jönköping": m_science_park,
  "Ung Företagsamhet": m_ung_foretagsamhet,
  "Ljusgårda": m_ljusgarda,
  "UngDrive": m_ungdrive,
};
