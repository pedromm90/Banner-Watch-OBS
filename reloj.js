// Función para actualizar el reloj
      function updateTime() {
        const clockElement = document.querySelector('.clock');
        const dateElement = document.querySelector('.date');
        const now = new Date();
        let hours = now.getHours();
        const ampm = hours >= 12 ? 'p.m.' : 'a.m.';
        hours = hours % 12;
        hours = hours ? hours : 12; // el 0 es falso
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');

        // Use toLocaleString with options for month name
        // Use toLocaleDateString with options for full date
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const dateString = now.toLocaleDateString('es-CO', options); // 'es-CO' for Colombian Spanish

        const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
        clockElement.textContent = timeString;
        dateElement.textContent = dateString;
      }

      // Actualizar el reloj cada segundo
      setInterval(updateTime, 1000);

      // Actualizar el reloj al cargar la página
      updateTime();