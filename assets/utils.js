
const paperMap = {}

function processPapers(data) {
  console.log('papers:', data)
  const rowObjs = $.csv.toObjects(data)
  console.log('row objs:', rowObjs)

//  for (const rowObj of rowObjs) {
//    const rowNum = rowObj['#']
//    if (parseInt(rowNum)) {
//      paperMap[rowNum] = rowObj
//    }
//  }

//  console.log('paperMap', paperMap)

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
