function searchSite() {
    let q = document.getElementById("search").value.toLowerCase();

    if (q.includes("spirit")) location.href = "spirit-code.html";
    else if (q.includes("blood")) location.href = "blood-hunt.html";
    else if (q.includes("devil")) location.href = "devil-agents.html";
    else if (q.includes("agents")) location.href = "devil-agents.html";
    else if (q.includes("hunt")) location.href = "blood-hunt.html";
    else if (q.includes("code")) location.href = "devil-agents.html";
    else alert("No results found");
}