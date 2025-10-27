async function fetchDataAndCreateStyledCards() {
    try {
        const amsinewsDiv = document.getElementById("amsinews-aggregator");
        const domain = amsinewsDiv.dataset.domain;

        const response = await fetch(
            "https://app.amsinews.id/api/v1/view-posts?offset=0&limit=7&domain="+domain+"&rand="+Math.random()
        );

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const cardContainer = document.createElement("div");
        cardContainer.style.borderRadius = "10px";
        cardContainer.style.border = "1px solid #d3d6da";

        const containerHeader = document.createElement("div");
        containerHeader.style.textAlign = "center";
        containerHeader.style.borderBottom = "1px solid #d3d6da";
        const imageLogo = document.createElement("img");
        imageLogo.src =
            "https://cms-media.amsinews.id/storage/files/2/amsi2.png";
        imageLogo.style.width = "30%";
        const logoLink = document.createElement("a");
        logoLink.href = "https://amsinews.id/";
        logoLink.target = "_blank";
        logoLink.appendChild(imageLogo);
        containerHeader.appendChild(logoLink);
        cardContainer.appendChild(containerHeader);

        data.data.forEach((article) => {
            const card = document.createElement("div");
            card.style.padding = "1rem";
            card.style.position = "relative";
            card.style.borderBottom = "1px solid #d3d6da";

            const cardContent = document.createElement("div");
            cardContent.style.display = "flex";
            cardContent.style.flexDirection = "row";

            const imageContainer = document.createElement("div");
            imageContainer.style.overflow = "hidden";
            imageContainer.style.width = "80px";
            imageContainer.style.height = "80px";

            const image = document.createElement("img");
            image.src = article.featuredImage;
            image.alt = article.title;
            image.style.width = "100%";
            image.style.height = "100%";
            image.style.objectFit = "cover";
            image.style.borderRadius = "10px";
            image.onerror = function () {
                image.src = "https://app.amsinews.id/default.png";
            };

            const cardBody = document.createElement("div");
            cardBody.style.flex = "2";
            cardBody.style.paddingLeft = "4px";
            cardBody.style.paddingLeft = "20px";

            const cardTitle = document.createElement("h3");
            cardTitle.textContent = article.title;
            cardTitle.style.fontWeight = "bold";
            cardTitle.style.margin = 0;
            cardTitle.style.fontSize = "100%";
            const domain = isValidURL(article.config_name) ? new URL(article.config_name).hostname : "amsinews.id";

            const cardDate = document.createElement("p");
            cardDate.innerHTML = `<small class="text-muted">${article.date} . <a href="${article.config_name}" style="text-decoration:none;">${domain}</a></small>`;

            imageContainer.appendChild(image);
            cardContent.appendChild(imageContainer);

            const articleLink = document.createElement("a");
            articleLink.href = article.href;
            articleLink.target = "_blank";
            articleLink.style.textDecoration = "none";

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardDate);
            cardContent.appendChild(cardBody);
            articleLink.appendChild(cardContent);
            card.appendChild(articleLink);
            cardContainer.appendChild(card);
        });
        amsinewsDiv.appendChild(cardContainer);
    } catch (error) {
        console.error("Error:", error);
    }
}

function isValidURL(url) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}

// Call the function to load the widget
fetchDataAndCreateStyledCards();
