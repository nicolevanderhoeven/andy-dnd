module.exports = async function getlastGameNum(params) {
    /*
    This function does the following:
    - gets the last game number from the "Previous Session Notes" folder
    - adds 1 to it
    - sets the variable "lastGameNum" to the last game number
    - sets the variable "newGameNum" to the new game number
    */
    let titles = app.plugins.plugins.dataview.api
    .pages(`"Wildemount/_Tues Wildemount DM Notes/Previous Session Notes"`)
    // .sort(b => b.file.name, 'desc');
    .sort(function(b) {
        let num = b.file.name.match(/S(\d+)/);
        return parseInt(num);
    }, 'desc');
    let lastGameNum = 0;

    if (titles.length > 1) {
        const filename = JSON.stringify(titles[0].file.path).replace("\"","").replace("\"","").replace(".md","");
        const regex = /S(\d+)/g;
        const found = filename.match(regex);
        lastGameNum = found[0].replace("S","");
        // Wildemount/_Tues Wildemount DM Notes/Previous Session Notes/S83 2023-Etwas
    }
    params.variables["lastGameNum"] = lastGameNum;
    params.variables["newGameNum"] = parseInt(lastGameNum) + 1;
    console.log('last: ' + params.variables["lastGameNum"]);
    console.log('new: ' + params.variables["newGameNum"]);
}