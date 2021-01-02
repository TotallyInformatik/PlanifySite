$(function() {
  
  setupSummary();
  setupBlobs();
  setupRellax();

});

function setupRellax() {
  $(".blob").each(function() {
    $(this).addClass("rellax");
    $(this).attr("data-rellax-speed", -Math.round(Math.random() * 5) - 1);
  });

  $(".content-box").addClass("rellax");
  $(".content-box").attr("data-rellax-speed", -5);
}

function setupBlobs() {
  let blobCount = Math.round(Math.random() * 3) + 3;
  for (let i=0; i<blobCount; i++) {
    let newBlobUrl = `./../assets/svgs/blobs/blob${Math.round(Math.random() * 5) + 1}.svg`;
    let newBlob = $(`<object data="${newBlobUrl}" type="image/svg+xml" class="blob"></object>`);
    let blobSize = Math.random() * 300 + 300;
    let positionX = Math.random() * 90;  // in Prozent
    let positionY = Math.random() * 80;  // in Prozent


    newBlob.css({
      "height": blobSize,
      "width": blobSize,
      "bottom": `${positionY}%`,
      "right": `${positionX}%`
    });

    $(".hero-section").append(newBlob);

  }
}

function setupSummary() {
  let allSections = $(".standard-section");
  let sectionIndex = 0;
  let summary = $(".page-summary");

  for (let section of allSections) {
    let sectionId = `s${sectionIndex}`;
    $(section).attr("id", sectionId);
    let currentSectionHeading = $(section).find(".standard-section-heading"); 
    summary.append($(`<li><a onclick="smoothScrollTo('#${sectionId}')">${$(currentSectionHeading).text()}</a></li>`));

    sectionIndex++;
  }

}

function smoothScrollTo(sectionId) {
  document.querySelector(sectionId).scrollIntoView({
    behavior: "smooth"
  });
}