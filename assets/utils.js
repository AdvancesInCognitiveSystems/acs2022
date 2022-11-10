
const paperMap = {}
var data

function getRows(data) {
    const rowObjs = $.csv.toObjects(data)
    console.log('paper rows:', rowObjs)
    return rowObjs
}

function divID (d) {
    d.getAttribute('id')
}

function populateCat(catDiv) {
    console.log("top of populateCat", catDiv)
    catID = catDiv.getAttribute('id')
    catDiv.innerHtml = "<ul><li>" + "cat" + catID + "<li><ul>"
    console.log('populated:', catID, catDiv.innerHtml)
}

// called in onload <script> of papers-by-topic.md
function populateCategories () {
    catDivs = document.getElementsByClassName("PaperCat")
    console.log('populateCategories divs:', catDivs, catDivs.length)
    for(let i = 0; i < catDivs.length; i++) { 
        console.log("div", i, catDivs[i])
        populateCat(catDivs[i])
    }
}


// was to be called onload of body from default.html
function showPapers() {
    if (document.getElementById("PapersByTopic")) {
        console.log("top of show papers found PapersByTopic")
        populateCategories()
    }
}



function slackChannel(paperNum) {
  const channelUrl = paperMap[paperNum]["Slack Channel"]
  // console.log('slackChannel', paperNum, channelUrl)
  return channelUrl
}

// You can use this to link to a slack channel for a given paper number, like so:
//  <a onClick="goToSlackChannel(6)">Slack discussion</a>
function goToSlackChannel(paperNum) {
  const url = slackChannel(paperNum)
  console.log('openSlackChannel', url)
  window.open(url,'_blank')
}


function loadCSV(name) {
    $.ajax({
        type: "GET",
        url: "{{ site.baseurl }}/" + name,
        dataType: "text",
        success: function(response) {data = getRows(response);}
    });
}
    
