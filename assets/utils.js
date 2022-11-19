
const paperMap = {1:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04B30SGYF8"},
                  2:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04B9J64HV1"},
                  3:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04BNB7Q31P"},
                  4:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04B9JSU8V9"},
                  5:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04B34FTBPG"},
                  6:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04BZDCMFT2"},
                  7:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04B9N6CDA6"},
                  8:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04B9K7QRDH"},
                  9:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04B9K9AF9R"},
                  10:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04BZDMDAE4"},
                  11:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04BC6M8TTN"},
                  12:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04BC6NMM44"},
                  13:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04B6Q73DNZ"}, 
                  14:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04BC6T3E9J"},
                  15:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04BC6V96CC"}, 
                  16:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04B6QF6LLD"}, 
                  17:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04AV6YEEK1"}, 
                  18:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04B35CTLPQ"}, 
                  19:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04B6QNS73P"}, 
                  20:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04BC795UVA"}, 
                  21:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04B6QUHA1K"}, 
                  22:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04B9L5E5MH"}, 
                  23:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04B9P9DTSN"}, 
                  24:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04BC7JM1B6"}, 
                  25:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04AV7H0VPZ"}, 
                  26:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04B9PNG5K4"}, 
                  27:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04AV7UDRE3"},
                  28:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04B36DEJJ2"}, 
                  29:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04B9Q2LCKU"}, 
                  30:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04BZFF0256"}, 
                  31:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04BZFJQGD6"}, 
                  32:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04B36Y9ACW"}, 
                  33:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04AV8NT27R"}, 
                  34:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04B9MMD85R"}, 
                  35:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04AV8V11HV"}, 
                  36:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04BC91PP1S"},
                  37:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04CE0Q6RCG"},
                  38:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04BZDBH80Y"}, // invited 1 si
                  39:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04B6S2PJ2H"}, // invited 2 byrne
                  40:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04BNE75H09"}, // invited 3 lenat
                  41:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04BZEA2RHN"}, // simon 
                  42:{"Slack Channel":"https://advcogsystems.slack.com/archives/C04B9PXLN9G"}} // panel
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
    
