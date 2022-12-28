import React from 'react';
const useTitle = (title:any) => {
    const documentDefined = typeof document !== 'undefined';
    const originalTitle = React.useRef(documentDefined ? document.title : null);
  
    React.useEffect(() => {
      if (!documentDefined) return;
  
      if (document.title !== title) document.title = title;
  
      return () => {
        //@ts-ignore
        document.title = originalTitle.current;
      };
    }, []);
  };

    export default useTitle;