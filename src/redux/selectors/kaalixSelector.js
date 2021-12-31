import { createSelector } from "reselect";

const kaalixS = createSelector(
  (state) => state.kaalix,
  (dataState) => {
    return {
      landing: dataState.data.landing,
      suggestion: dataState.data.suggestions,
      promotion: dataState.data.promotions,
      service: dataState.data.services,
      servicesTwo: dataState.data.servicesTwo,
      footer: dataState.data.footer,
    };
  }
);
export default kaalixS;
