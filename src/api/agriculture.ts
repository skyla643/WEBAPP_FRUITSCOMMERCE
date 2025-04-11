// Fetchers for INDEC, INTA, etc.
export const fetchRegionalYield = async () => {
    const res = await fetch('https://apis.datos.gob.ar/series/api/series/?ids=143.3_NO_PR_2004_A_21');
    return res.json();
  };
  
  export const fetchOrchardHealth = async () => {
    const res = await fetch('https://api.inta.gob.ar/citrus/health');
    return res.json();
  };
  
  export const fetchFertilizerRecommendations = async (lat: number, lng: number) => {
    const res = await fetch(`https://api.soilgrids.org/query?lat=${lat}&lon=${lng}`);
    return res.json();
  };