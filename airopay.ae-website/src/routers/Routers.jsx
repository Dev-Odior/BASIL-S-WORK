import {
  Home,
  NotFound,
  ContactUs,
  Terms,
  PrivacyPolicy,
  Delete,
} from "../pages";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import {
  OurPlatform,
  Composability,
  MultiCloud,
  Process,
  Configuration,
  Security,
} from "../pages/whatWeDo/technology";

import { Devs } from "../pages/whatWeDo/ecosystem";
import { Advisory, Enablement } from "../pages/whatWeDo/services";

import {
  Banks,
  Lenders,
  NeoBank,
  Ecommerce,
  Telcons,
  Fintech,
} from "../pages/customers/whoweserve";

import { Stories } from "../pages/customers/customerstories";

import {
  BusinessBanking,
  Deposits,
  PersonalBanking,
  StoreValueAccount,
} from "../pages/solutions/dailybanking";

import {
  BusinessLending,
  PersonalLending,
  PurchaseFinance,
  RetailMortgage,
  RethinkingLending,
} from "../pages/solutions/lending";

import { Baas, EmbeddedFinance, Pnpl } from "../pages/solutions/usecases";
import { Career } from "../pages/company/joinUs";

const Routers = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" Component={Home} />
      <Route path="/terms" Component={Terms} />
      <Route path="/privacy-policy" Component={PrivacyPolicy} />
      <Route path="/delete-account" Component={Delete} />

      {/* for what we do */}
      <Route path="/technology/ourplatform" Component={OurPlatform} />
      <Route path="/technology/composability" Component={Composability} />
      <Route path="/technology/multicloud" Component={MultiCloud} />
      <Route path="/technology/process" Component={Process} />
      <Route path="/technology/configuration" Component={Configuration} />
      <Route path="/technology/devs" Component={Devs} />
      <Route path="/technology/security" Component={Security} />
      <Route path="/technology/enablement" Component={Enablement} />
      <Route path="/technology/advisory" Component={Advisory} />

      {/* For Customers */}
      <Route path="/customers/banks" Component={Banks} />
      <Route path="/customers/lenders" Component={Lenders} />
      <Route path="/customers/neobanks" Component={NeoBank} />
      <Route path="/customers/ecommerce" Component={Ecommerce} />
      <Route path="/customers/fintech" Component={Fintech} />
      <Route path="/customers/telcons" Component={Telcons} />
      <Route path="/customers/customerstories" Component={Stories} />

      {/* For solutions */}
      <Route path="/solutions/businessbanking" Component={BusinessBanking} />
      <Route path="/solutions/deposits" Component={Deposits} />
      <Route path="/solutions/personalbanking" Component={PersonalBanking} />
      <Route
        path="/solutions/storevalueaccount"
        Component={StoreValueAccount}
      />
      <Route path="/solutions/businesslending" Component={BusinessLending} />
      <Route path="/solutions/personallending" Component={PersonalLending} />
      <Route path="/solutions/purchasefinance" Component={PurchaseFinance} />
      <Route path="/solutions/retailmortgage" Component={RetailMortgage} />
      <Route
        path="/solutions/rethinkinglending"
        Component={RethinkingLending}
      />
      <Route path="/solutions/baas" Component={Baas} />
      <Route path="/solutions/embeddedfinance" Component={EmbeddedFinance} />
      <Route path="/solutions/pnpl" Component={Pnpl} />

      {/* Company */}
      <Route path="/join/career" Component={Career} />

      <Route path="/contact" Component={ContactUs} />
      <Route path="*" Component={NotFound} />
    </Routes>
  );
};
export default Routers;
