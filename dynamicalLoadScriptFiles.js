/* Dynamically load script tag and file using javascript */
let head = document.getElementsByTagName('head')[0];
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '{library path}';
      head.appendChild(script);
      script.onload = function(){
        let lmScript = document.createElement('script');
        lmScript.type = 'text/javascript';
        lmScript.src = '{library path}';
        head.appendChild(lmScript);
      }
