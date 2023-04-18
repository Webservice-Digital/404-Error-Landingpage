		// Text blink effect including redirection to an specific URL
		// Jan Gebser
		// github@brainhub24.com
		
        setInterval(()=>document.querySelector(".blink").classList.toggle("hide"),600);
        function redirect(){window.location.replace("https://netcore.digital/");} 
        window.onkeypress=redirect;