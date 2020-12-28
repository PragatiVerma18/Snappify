import axios from "axios";

const getScreenshot = (link, w, h, setSc) => {
    let req = axios
      .get(
        `https://screenshotapi.net/api/v1/screenshot`
	  , {
      params: {
        url: link,
        token: 'REUXZIEP5RLXUEFS8PEF0RZTH15SJK5A',
        width: w,
        height: h,
        lazy_load: true,
        fresh: true
      }
    });
	
	if (!setSc)
		return req;
	
	return req.then(res => {
        const screenshot = res.data.screenshot;
        setSc({ screenshot });
      });
};

export default getScreenshot;