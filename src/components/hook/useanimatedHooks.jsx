import WOW from 'wowjs'
const useanimatedHooks = () => {
     const wow = new WOW.WOW({ live: false });
     wow.init({
       duration: 1000,
     });
};

export default useanimatedHooks;