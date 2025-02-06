(async () => {
    const inputFile = document.querySelector("#file");
    const button = document.querySelector("#button");
    const link = document.querySelector("#link");

    const handleSubmit = async (event) => {
        const formData = new FormData();
        formData.append("file", inputFile.files[0]);

        try {
            const res = await fetch("/upload", {
                method: "POST",
                body: formData
            });

            if (!res.ok) {
                throw new Error("Errore nell'upload: " + res.statusText);
            }

            const data = await res.json();
            link.setAttribute("href", data.url);
            link.innerText = "File caricato: " + data.url;
        } catch (e) {
            console.error("Errore durante l'upload", e);
        }
    };

    button.onclick = handleSubmit;
})();
