function generateExcuse() {
    const formulario = document.querySelector('#excuseForm')
    const who = document.getElementById('who').value;
    const action = document.getElementById('action').value;
    const what = document.getElementById('what').value;
    const when = document.getElementById('when').value;

    if (who && action && what && when) {
        const excuse = `${who} ${action} ${what} ${when}.`;
        document.getElementById('excuseOutput').innerText = excuse;
    } else {
        document.getElementById('excuseOutput').innerText = 'Por favor, completa todos los campos para generar una excusa.';
    }

    formulario.reset();
}