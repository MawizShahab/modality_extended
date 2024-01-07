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
    "#starterModal #moreOptionsLink, #generateNewIntroModal #moreOptionsLink, #generateNewTagLineModal #moreOptionsLink, #generateNewTagModal #moreOptionsLink, #generateNewDescriptionModal #moreOptionsLink, #regenerateOfferingModal #moreOptionsLink, #generateTitleModal #moreOptionsLink, #generateOfferingDescriptionModal #moreOptionsLink, #generateOfferingMoreInfoModal #moreOptionsLink, #generateNewValuesModal #moreOptionsLink, #generateValuesDescriptionModal #moreOptionsLink, #generateValuesTitleModal #moreOptionsLink, #generateNewBackgroundModal #moreOptionsLink, #generateBackgroundTitleModal #moreOptionsLink, #generateBackgroundDescriptionModal #moreOptionsLink, #generateAddEditScopeTitleModal #moreOptionsLink, #generateAddEditScopeDescriptionModal #moreOptionsLink, #generateNewResourceDescriptionModal #moreOptionsLink, #generateResourceTitleModal #moreOptionsLink, #generateResourceDescriptionModal #moreOptionsLink"
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

/* General FAQ Toggle */

$(document).ready(function () {
  $(".general-faq .question").click(function () {
    const answer = $(this).next(".answer");
    const icon = $(this).find(".toggle-icon");

    // Close all other answers
    $(".answer").not(answer).slideUp();
    $(".toggle-icon").not(icon).text("+");

    if (answer.is(":visible")) {
      answer.slideUp();
      icon.text("+");
    } else {
      answer.slideDown();
      icon.text("-");
    }
  });
});

/* Homepage  FAQ Toggle */

$(document).ready(function () {
  $(".homepage-faq .question").click(function () {
    const currentQuestion = $(this).find(".lg-p");
    const answer = $(this).next(".answer");
    const icon = $(this).find(".toggle-icon");
    const heroImage = $(this).closest(".homepage-faq-main-wrapper").find(".homepage-faq-hero img");

    // Close all other answers and revert font size class
    $(".answer").not(answer).slideUp();
    $(".toggle-icon").not(icon).text("+");
    $(".lg-p.xl-p").not(currentQuestion).removeClass("xl-p");

    // Toggle font size class for the clicked answer
    currentQuestion.toggleClass("xl-p");

    // Toggle image source based on FAQ item
    if (answer.is(":visible")) {
      answer.slideUp();
      icon.text("+");
      // Reset image to the default when answer is closed with fadeOut
      heroImage.fadeOut(300, function () {
        heroImage.attr("src", "./images/make-money-hero.png").fadeIn(300);
      });
    } else {
      answer.slideDown();
      icon.text("-");
      // Update image based on the FAQ item with fadeIn
      if (currentQuestion.text() === "Make More Money") {
        heroImage.fadeOut(300, function () {
          heroImage.attr("src", "./images/make-money-hero.png").fadeIn(300);
        });
      } else if (currentQuestion.text() === "Be Yourself") {
        heroImage.fadeOut(300, function () {
          heroImage.attr("src", "./images/make-money-hero-2.png").fadeIn(300);
        });
      } else if (currentQuestion.text() === "Train As You Go") {
        heroImage.fadeOut(300, function () {
          heroImage.attr("src", "./images/make-money-hero-3.png").fadeIn(300);
        });
      }
    }
  });
});
