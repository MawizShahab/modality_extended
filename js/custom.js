$(document).ready(function () {
  // Js to handle mobile nav
  $("#navbarToggler").click(function () {
    $(".navbar-collapse").slideToggle("slow");
  });

  // JavaScript to handle add details popup
  $("#addDetails").on("show.bs.modal", function (e) {
    $("#generateBtn").on("click", function () {
      $("#addDetails").modal("hide");
      $("#secondModal").modal("show");
    });

    $("#helpMe").on("click", function () {
      $("#addDetails").modal("show");
      $("#secondModal").modal("hide");
    });
  });

  // Js for the Edit intro sections

  // $("#editIntroModal").on("show.bs.modal", function (e) {
  //   $("#backToEditInro").on("click", function () {
  //     $("#editIntroModal").modal("hide");
  //     $("#generateNewIntroModal").modal("show");
  //   });

  //   $("#offeringsBack").on("click", function () {
  //     $("#addOfferings").modal("show");
  //     $("#addOfferingsStepTwo").modal("hide");
  //   });
  // });

  // Js for the Add offerings popup
  $("#addOfferings").on("show.bs.modal", function (e) {
    $("#generateOfferingsBtn").on("click", function () {
      $("#addOfferings").modal("hide");
      $("#addOfferingsStepTwo").modal("show");
    });

    $("#offeringsBack").on("click", function () {
      $("#addOfferings").modal("show");
      $("#addOfferingsStepTwo").modal("hide");
    });
  });

  // Js for the Add values popup
  $("#addValues").on("show.bs.modal", function (e) {
    $("#generateValuesBtn").on("click", function () {
      $("#addValues").modal("hide");
      $("#addValuesStepTwo").modal("show");
    });

    $("#valuesBack").on("click", function () {
      $("#addValues").modal("show");
      $("#addValuesStepTwo").modal("hide");
    });
  });

  // Js to handle remove notifications
  $(
    "#closeNotificationBtn, .btn-close-offer-notification, .btn-close-value-notification"
  ).on("click", function () {
    $(this)
      .closest(
        ".profile-notification, .offer-notification, .value-notification"
      )
      .hide();
  });

  // Js to handle remove tag
  $(".close-tag").on("click", function () {
    $(this).closest(".remove-tag").hide();
  });
});

// Js to handle starter modal and more selections toggle for AI

$(document).ready(function () {
  $("#starterModal").modal("show");
  $(
    "#starterModal #moreOptionsLink, #generateNewIntroModal #moreOptionsLink, #generateNewTagLineModal #moreOptionsLink, #generateNewTagModal #moreOptionsLink, #generateNewDescriptionModal #moreOptionsLink, #regenerateOfferingModal #moreOptionsLink, #generateTitleModal #moreOptionsLink, #generateOfferingDescriptionModal #moreOptionsLink, #generateOfferingMoreInfoModal #moreOptionsLink"
  ).click(function () {
    var moreTagsList = $(this).closest(".modal-body").find("#moreTagsList");
    moreTagsList.slideToggle();

    var linkText = $(this).text();
    $(this).html(
      linkText.includes("More")
        ? "Less options <i class='fas fa-chevron-up'></i>"
        : "More options <i class='fas fa-chevron-down'></i>"
    );
  });

  if ($(window).width() <= 768) {
    $(".additional-profile-tag-wrapper").insertAfter(
      ".upload-profile-container"
    );
  }
});
