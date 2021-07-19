//heirs
var heirs = [
    {
        name:"Sons",
        description:"Sons of the deceased person",
        share:
        [
            "The rest of the inheritance if there is no daughter", 
            "2 part of the rest of the inheritance if there are daughters"
        ],
        blocker:
        [
            "No one"
        ]
    },{
        name:"Daughters",
        description:"Daughters of the deceased person",
        share:
        [
            "1/2 of inheritance if there is no son", 
            "2/3 of inheritance if the deceased person has more than one daughters and there is no son",
            "1 part of the rest of the inheritance if there are sons"
        ],
        blocker:
        [
            "No one"
        ]
    },{
        name:"Grand-Sons (from Sons)",
        description:"Grand-Sons of the deceased person",
        share:
        [
            "The rest of the inheritance if there is no grand-daughter (from son)",
            "2 part of the rest of the inheritance if there are grand-daughters (from sons)"
        ],
        blocker:
        [
            "Sons"
        ],
    },{
        name:"Grand-Daughters (from Sons)",
        description:"Grand-Daughters of the deceased person",
        share:
        [
            "1/2 of inheritance if there is no grand-son (from son)",
            "2/3 of inheritance if the deceased person has more than one grand-daughters (from sons) and there is no grand-son (from sons)",
            "1/6 of inheritance if there is no grand-son (from son) but there are daughters",
            "1 part of the rest of the inheritance if there are grand-sons (from sons)"
        ],
        blocker:
        [
            "Sons"
        ]
    },{
        name:"Grand-Grand-Sons (from Grand-Sons)",
        description:"Sons of grand-sons (from s) of the deceased person",
        share:
        [
            "The rest of the inheritance if there is no grand-grand-daughter (from grand-son)", 
            "2 part of the rest of the inheritance if there are grand-grand-daughters (from grand-sons)"
        ],
        blocker:
        [
            "Sons",
            "Grand-Sons (from sons)"
        ]
    },{
        name:"Grand-Grand-Daughters (from Grand-Sons)",
        description:"Daughters of grand-sons (from sons) of the deceased person",
        share:
        [
            "1/2 of inheritance if there is no grand-grand-son (from grand-son)",
            "2/3 of inheritance if the deceased person has more than one grand-daughters (from sons) and there is no grand-son (from sons)",
            "1/6 of inheritance if there is no grand-grand-son (from son) but there are grand-daughters (from sons) or daughters",
            "1 part of the rest of the inheritance if there are grand-grand-sons (from grand-sons)"
        ],
        blocker:
        [
            "Sons",
            "Daughters if there are grand-daughters (from sons) but there is no grand-grand-sons (from grand-sons)",
            "Grand-Sons (from sons)",
            "Grand-Daughters if there are daughters but there is no grand-grand-son (from grand-son)"
        ]
    },{
        name:"Brothers",
        description:"Brothers of the deceased person",
        share:
        [
            "The rest of the inheritance",
            "2 part of the rest of the inheritance if there are sisters"
        ],
        blocker:
        [
            "Sons",
            "Grand-Sons (from Sons)",
            "Grand-Grand-Sons (from Gran-Sons)",
            "Father",
            "Grand-Father (from Father)",
            "Father of Grand-Father (from Father)"
        ]
    },{
        name:"Sisters",
        description:"Sisters of the deceased person",
        share:
        [
            "1/2 of inheritance if there is no brother",
            "2/3 of inheritance if the deceased person has more than one sisters and there is no brothers",
            "1 part of the rest of the inheritance if there are brothers"
        ],
        blocker:
        [
            "Sons",
            "Grand-Sons (from Sons)",
            "Grand-Grand-Sons (from Gran-Sons)",
            "Father",
            "Grand-Father (from Father)",
            "Father of Grand-Father (from Father)"
        ]
    },{
        name:"Half-Brothers (same Father)",
        description:"Half-Brothers (same father) of the deceased person",
        share:
        [
            "The rest of the inheritance",
            "2 part of the rest of the inheritance if there are half-sisters (same Father)"
        ],
        blocker:
        [
            "Sons",
            "Grand-Sons (from Sons)",
            "Grand-Grand-Sons (from Gran-Sons)",
            "Father",
            "Grand-Father (from Father)",
            "Father of Grand-Father (from Father)",
            "Brothers"
        ]
    },{
        name:"Half-Sisters (same Father)",
        description:"Half-Sisters (same father) of the deceased person",
        share:
        [
            "1/2 of inheritance if there is no half-brother (same father)",
            "2/3 of inheritance if the deceased person has more than one half-sisters (same father) and there is no half-brothers (same father)",
            "1/6 of inheritance if there are sisters",
            "1 part of the rest of the inheritance if there are half-brothers (same father)"
        ],
        blocker:
        [
            "Sons",
            "Grand-Sons (from Sons)",
            "Grand-Grand-Sons (from Gran-Sons)",
            "Father",
            "Grand-Father (from Father)",
            "Father of Grand-Father (from Father)",
            "Brothers"
        ]
    },{
        name:"Half-Brothers (same Mother)",
        description:"Half-Brothers (same mother) of the deceased person",
        share:
        [
            "1/3 of inheritance if the deceased person has more than one half-brother (same mother) and half-sister (same mother), the share is combined",
            "1/6 of inheritance, the share is combined with half-sister (same mother)"
        ],
        blocker:
        [
            "Sons",
            "Daughters",
            "Grand-Sons (from Sons)",
            "Grand-Grand-Sons (from Grand-Sons)",
            "Grand-Daughters (from Sons)",
            "Grand-Grand-Daughters (from Grand-Sons)",
            "Father",
            "Grand-Father (from Father)",
            "Father of Grand-Father (from Father)"

        ]
    },{
        name:"Half-Sisters (same Mother)",
        description:"Half-Sisters (same mother) of the deceased person",
        share:
        [
            "1/3 of inheritance if the deceased person has more than one half-brother (same mother) and half-sister (same mother), the share is combined",
            "1/6 of inheritance, the share is combined with half-brother (same mother)"
        ],
        blocker:
        [
            "Sons",
            "Daughters",
            "Grand-Sons (from Sons)",
            "Grand-Grand-Sons (from Grand-Sons)",
            "Grand-Daughters (from Sons)",
            "Grand-Grand-Daughters (from Grand-Sons)",
            "Father",
            "Grand-Father (from Father)",
            "Father of Grand-Father (from Father)"
        ]
    },{
        name:"Father",
        description:"Father of the deceased person",
        share:
        [
            "The rest of the inheritance if there is no sons, grand-sons (from sons) and grand-grand-sons (from grand-sons)",
            "1/6 of inheritance if there are sons or grand-sons (from sons) or grand-grand-sons (from grand-sons)"
        ],
        blocker:
        [
            "No one"
        ]
    },{
        name:"Mother",
        description:"Mother of the deceased person",
        share:
        [
            "1/3 of inheritance",
            "1/6 of inheritance if there are sons or grand-sons (from sons) or grand-grand-sons (from grand-sons) or more than one brothers or sisters"
        ],
        blocker:
        [
            "No one"
        ]
    },{
        name:"Grand-Father (from Father)",
        description:"Grand-Father (from father) of the deceased person",
        share:
        [
            "The rest of the inheritance if there is no sons, grand-sons (from sons) and grand-grand-sons (from grand-sons)",
            "1/6 of inheritance if there are sons or grand-sons (from sons) or grand-grand-sons (from grand-sons)"
        ],
        blocker:
        [
            "Father"
        ]
    },{
        name:"Grand-Mother (from Father)",
        description:"Grand-Mother (from father) of the deceased person",
        share:
        [
            "1/3 of inheritance",
            "1/6 of inheritance if there are sons or grand-sons (from sons) or grand-grand-sons (from grand-sons) or more than one brothers or sisters"
        ],
        blocker:
        [
            "Father",
            "Mother"
        ]
    },{
        name:"Grand-Mother (from Mother)",
        description:"Grand-Mother (from mother) of the deceased person",
        share:
        [
            "1/3 of inheritance",
            "1/6 of inheritance if there are sons or grand-sons (from sons) or grand-grand-sons (from grand-sons) or more than one brothers or sisters"
        ],
        blocker:
        [
            "Mother"
        ]
    },{
        name:"Father of Grand-Father (from Father)",
        description:"Father of grand-father (from father) of the deceased person",
        share:
        [
            "The rest of the inheritance if there is no sons, grand-sons (from sons) and grand-grand-sons (from grand-sons)",
            "1/6 of inheritance if there are sons or grand-sons (from sons) or grand-grand-sons (from grand-sons)"
        ],
        blocker:
        [
            "Father",
            "Grand-Father (from Father)"
        ]
    },{
        name:"Mother of Grand-Father (from Father)",
        description:"Mother of grand-father (from father) of the deceased person",
        share:
        [
            "1/3 of inheritance",
            "1/6 of inheritance if there are sons or grand-sons (from sons) or grand-grand-sons (from grand-sons) or more than one brothers or sisters"
        ],
        blocker:
        [
            "Father",
            "Mother",
            "Grand-Father (from Father)",
            "Grand-Mother (from Father)"
        ]
    },{
        name:"Mother of Grand-Mother (from Father)",
        description:"Mother of grand-mother (from father) of the deceased person",
        share:
        [
            "1/3 of inheritance",
            "1/6 of inheritance if there are sons or grand-sons (from sons) or grand-grand-sons (from grand-sons) or more than one brothers or sisters"
        ],
        blocker:
        [
            "Father",
            "Mother",
            "Grand-Mother (from Father)"
        ]
    },{
        name:"Mother of Grand-Mother (from Mother)",
        description:"Mother of grand-mother (from mother) of the deceased person",
        share:
        [
            "1/3 of inheritance",
            "1/6 of inheritance if there are sons or grand-sons (from sons) or grand-grand-sons (from grand-sons) or more than one brothers or sisters"
        ],
        blocker:
        [
            "Mother",
            "Grand-Mother (from Mother)"
        ]
    },{
        name:"Husband",
        description:"Husband of the deceased person",
        share:
        [
            "1/2 of inheritance if there is no son, grand-son (from sons) or grand-grand-son (from grand-sons)",
            "1/4 of inheritance if there are sons, grand-sons (from sons) or grand-grand-sons (from grand-sons)"
        ],
        blocker:
        [
            "No one"
        ]
    },{
        name:"Wifes",
        description:"Wifes of the deceased person",
        share:
        [
            "1/4 of inheritance if there is no son, grand-son (from sons) or grand-grand-son (from grand-sons)",
            "1/8 of inheritance if there are sons, grand-sons (from sons) or grand-grand-sons (from grand-sons)"
        ],
        blocker:
        [
            "No one"
        ]
    },{
        name:"Nieces (from Brother)",
        description:"Nieces (son of brother) of the deceased person",
        share:
        [
            "The rest of the inheritance"
        ],
        blocker:
        [
            "Sons",
            "Grand-Sons (from Sons)",
            "Grand-Grand-Sons (from Grand-Sons)",
            "Father",
            "Grand-Father (from Father)",
            "Father of Grand-Father (from Father)",
            "Brother",
            "Half-Brother (same Father)"
        ]
    },{
        name:"Half-Nieces (from Half-Brother (same Father))",
        description:"Half-Nieces (son of half-brother with the same father) of the deceased person",
        share:
        [
            "The rest of the inheritance"
        ],
        blocker:
        [
            "Sons",
            "Grand-Sons (from Sons)",
            "Grand-Grand-Sons (from Grand-Sons)",
            "Father",
            "Grand-Father (from Father)",
            "Father of Grand-Father (from Father)",
            "Brother",
            "Half-Brother (same Father)",
            "Nieces"
        ]
    },{
        name:"Uncles",
        description:"Uncles (brothers of father) of the deceased person",
        share:
        [
            "The rest of the inheritance"
        ],
        blocker:
        [
            "Sons",
            "Grand-Sons (from Sons)",
            "Grand-Grand-Sons (from Grand-Sons)",
            "Father",
            "Grand-Father (from Father)",
            "Father of Grand-Father (from Father)",
            "Brother",
            "Half-Brother (same Father)",
            "Nieces",
            "Half-Nieces (from Half-Brother (same Father))"
        ]
    },{
        name:"Half-Uncles (same Grand-Father)",
        description:"Half-Uncles (brother of father with the same grand-father) of the deceased person",
        share:
        [
            "The rest of the inheritance"
        ],
        blocker:
        [
            "Sons",
            "Grand-Sons (from Sons)",
            "Grand-Grand-Sons (from Grand-Sons)",
            "Father",
            "Grand-Father (from Father)",
            "Father of Grand-Father (from Father)",
            "Brother",
            "Half-Brother (same Father)",
            "Nieces",
            "Half-Nieces (from Half-Brother (same Father))",
            "Uncles"
        ]
    },{
        name:"Cousins",
        description:"Cousins (sons of uncles) of the deceased person",
        share:
        [
            "The rest of the inheritance"
        ],
        blocker:
        [
            "Sons",
            "Grand-Sons (from Sons)",
            "Grand-Grand-Sons (from Grand-Sons)",
            "Father",
            "Grand-Father (from Father)",
            "Father of Grand-Father (from Father)",
            "Brother",
            "Half-Brother (same Father)",
            "Nieces",
            "Half-Nieces (from Half-Brother (same Father))",
            "Uncles",
            "Half-Uncles (same Grand-Father)"
        ]
    },{
        name:"Half-Cousins (from Half-Uncles (same Grand-Father))",
        description:"Half-Counsins (sons of uncles with the same grand-father) of the deceased person",
        share:
        [
            "The rest of the inheritance"
        ],
        blocker:
        [
            "Sons",
            "Grand-Sons (from Sons)",
            "Grand-Grand-Sons (from Grand-Sons)",
            "Father",
            "Grand-Father (from Father)",
            "Father of Grand-Father (from Father)",
            "Brother",
            "Half-Brother (same Father)",
            "Nieces",
            "Half-Nieces (from Half-Brother (same Father))",
            "Uncles",
            "Half-Uncles (same Grand-Father)",
            "Cousins"
        ]
    }
];
$(".heir-title").click(function() {
    var check_class = $(this).children(".heir-title-icon").hasClass("rotate-90-deg");
    if (check_class == false) {
        $(this).children(".heir-title-icon").addClass("rotate-90-deg");
    }
    else {
        $(this).children(".heir-title-icon").removeClass("rotate-90-deg");
    }
    $(this).next().children().slideToggle("fast");
});
$(".help").click(function() {
    var target_title = $(this).prev().text();
    var target_heirs = heirs.findIndex(x => x.name === target_title);
    var p_description = $("<p></p>").text(heirs[target_heirs].description + ".");

    var share_data = heirs[target_heirs].share;
    var share = $("<ul></ul>");
    for (var i = 0;i < share_data.length;i++) {
        share.append($("<li></li>").text(share_data[i] + "."));
    }
    var p_share = $("<p></p>").text("Share:").append(share);

    var blocker_data = heirs[target_heirs].blocker;
    var blocker = $("<ul></ul>");
    for (var j = 0;j < blocker_data.length;j++) {
        blocker.append($("<li></li>").text(blocker_data[j] + "."));
    }
    var p_blocker = $("<p></p>").text("Blocker:").append(blocker);

    $("#help").find(".modal-title").addClass("font-weight-bold").text(heirs[target_heirs].name);
    $("#help").find(".modal-body").empty();
    $("#help").find(".modal-body").append(p_description);
    $("#help").find(".modal-body").append(p_share);
    $("#help").find(".modal-body").append(p_blocker);
    $("#help").modal("show");
});
//-------------------------

//inheritance calculation global function
function get_inheritance() {
    return $("#inheritance-amount").val();
}
function set_share(input, target) {
    $(target).parent().next().children("input").val(input);
}
function set_share_each(input, target) {
    $(target).parent().next().next().children("input").val(input);
}
function max_value(max, target) {
    $(target).val(max);
}
function min_value(min, target) {
    $(target).val(min);
}
function rest_inheritance() {
    var share = 
        get_inheritance() - daughters_share_check() -
        granddaughters_share_check() - grandgranddaughters_share_check() - 
        sisters_share_check() - halfsisters_f_share_check() - halfbrothersisters_m_share('no') - 
        father_share_check() - grandfather_f_share_check() - fathergrandfather_f_share_check() - 
        mother_share('no') - grandmother_f_share('no') - grandmother_m_share('no') - mothergrandfather_f_share('no') - mothergrandmother_f_share('no') - mothergrandmother_m_share('no') -
        husband_share('no') - wifes_share('no');

    return share;
}
function update_share(target) {
    if (target != "sons") {
        if ($("#number-sons").val() > 0) {
            sons_share('no');
        }
    }
    if (target != "daughters") {
        if ($("#number-daughters").val() > 0) {
            daughters_share('no');
        }
    }
    if (target != "grandsons") {
        if ($("#number-grandsons").val() > 0) {
            grandsons_share('no');
        }
    }
    if (target != "granddaughters") {
        if ($("#number-granddaughters").val() > 0) {
            granddaughters_share('no');
        }
    }
    if (target != "grandgrandsons") {
        if ($("#number-grandgrandsons").val() > 0) {
            grandgrandsons_share('no');
        }
    }
    if (target != "grandgranddaughters") {
        if ($("#number-grandgranddaughters").val() > 0) {
            grandgranddaughters_share('no');
        }
    }
    if (target != "halfbrothersisters-m") {
        if ($("#number-halfbrothers-m").val() > 0) {
            halfbrothersisters_m_share('no');
        }
        if ($("#number-halfsisters-m").val() > 0) {
            halfbrothersisters_m_share('no');
        }
    }
    if (target != "brothers") {
        if ($("#number-brothers").val() > 0) {
            brothers_share('no');
        }
    }
    if (target != "sisters") {
        if ($("#number-sisters").val() > 0) {
            sisters_share('no');
        }
    }
    if (target != "halfbrothers-f") {
        if ($("#number-halfbrothers-f").val() > 0) {
            halfbrothers_f_share('no');
        }
    }
    if (target != "halfsisters-f") {
        if ($("#number-halfsisters-f").val() > 0) {
            halfsisters_f_share('no');
        }
    }
    if (target != "father") {
        if ($("#number-father").val() > 0) {
            father_share('no');
        }
    }
    if (target != "grandfather-f") {
        if ($("#number-grandfather-f").val() > 0) {
            grandfather_f_share('no');
        }
    }
    if (target != "fathergrandfather-f") {
        if ($("#number-fathergrandfather-f").val() > 0) {
            fathergrandfather_f_share('no');
        }
    }
    if (target != "mother") {
        if ($("#number-mother").val() > 0) {
            mother_share('no');
        }
    }
    if (target != "grandmother-f") {
        if ($("#number-grandmother-f").val() > 0) {
            grandmother_f_share('no');
        }
    }
    if (target != "grandmother-m") {
        if ($("#number-grandmother-m").val() > 0) {
            grandmother_m_share('no');
        }
    }
    if (target != "mothergrandfather-f") {
        if ($("#number-mothergrandfather-f").val() > 0) {
            mothergrandfather_f_share('no');
        }
    }
    if (target != "mothergrandmother-f") {
        if ($("#number-mothergrandmother-f").val() > 0) {
            mothergrandmother_f_share('no');
        }
    }
    if (target != "mothergrandmother-m") {
        if ($("#number-mothergrandmother-m").val() > 0) {
            mothergrandmother_m_share('no');
        }
    }
    if (target != "husband") {
        if ($("#number-husband").val() > 0) {
            husband_share('no');
        }
    }
    if (target != "wifes") {
        if ($("#number-wifes").val() > 0) {
            wifes_share('no');
        }
    }
    if (target != "nieces") {
        if ($("#number-nieces").val() > 0) {
            nieces_share('no');
        }
    }
    if (target != "halfnieces") {
        if ($("#number-halfnieces").val() > 0) {
            halfnieces_share('no');
        }
    }
    if (target != "uncles") {
        if ($("#number-uncles").val() > 0) {
            uncles_share('no');
        }
    }
    if (target != "halfuncles") {
        if ($("#number-halfuncles").val() > 0) {
            halfuncles_share('no');
        }
    }
    if (target != "cousins") {
        if ($("#number-cousins").val() > 0) {
            cousins_share('no');
        }
    }
    if (target != "halfcousins") {
        if ($("#number-halfcousins").val() > 0) {
            halfcousins_share('no');
        }
    }
}
function update_amount() {
    if ($("#inheritance-amount").val() < 0) {
        min_value(0, "#inheritance-amount");
    }
    if ($("#number-sons").val() > 0) {
        sons_share('yes');
    }
    if ($("#number-daughters").val() > 0) {
        daughters_share('yes');
    }
    if ($("#number-grandsons").val() > 0) {
        grandsons_share('yes');
    }
    if ($("#number-granddaughters").val() > 0) {
        granddaughters_share('yes');
    }
    if ($("#number-grandgrandsons").val() > 0) {
        grandgrandsons_share('yes');
    }
    if ($("#number-grandgranddaughters").val() > 0) {
        grandgranddaughters_share('yes');
    }
    if ($("#number-halfbrothers-m").val() > 0) {
        halfbrothersisters_m_share('yes');
    }
    if ($("#number-halfsisters-m").val() > 0) {
        halfbrothersisters_m_share('yes');
    }
    if ($("#number-brothers").val() > 0) {
        brothers_share('yes');
    }
    if ($("#number-sisters").val() > 0) {
        sisters_share('yes');
    }
    if ($("#number-halfbrothers-f").val() > 0) {
        halfbrothers_f_share('yes');
    }
    if ($("#number-halfsisters-f").val() > 0) {
        halfsisters_f_share('yes');
    }
    if ($("#number-father").val() > 0) {
        father_share('yes');
    }
    if ($("#number-grandfather-f").val() > 0) {
        grandfather_f_share('yes');
    }
    if ($("#number-fathergrandfather-f").val() > 0) {
        fathergrandfather_f_share('yes');
    }
    if ($("#number-mother").val() > 0) {
        mother_share('yes');
    }
    if ($("#number-grandmother-f").val() > 0) {
        grandmother_f_share('yes');
    }
    if ($("#number-grandmother-m").val() > 0) {
        grandmother_m_share('yes');
    }
    if ($("#number-mothergrandfather-f").val() > 0) {
        mothergrandfather_f_share('yes');
    }
    if ($("#number-mothergrandmother-f").val() > 0) {
        mothergrandmother_f_share('yes');
    }
    if ($("#number-mothergrandmother-m").val() > 0) {
        mothergrandmother_m_share('yes');
    }
    if ($("#number-husband").val() > 0) {
        husband_share('yes');
    }
    if ($("#number-wifes").val() > 0) {
        wifes_share('yes');
    }
    if ($("#number-nieces").val() > 0) {
        nieces_share('yes');
    }
    if ($("#number-halfnieces").val() > 0) {
        halfnieces_share('yes');
    }
    if ($("#number-uncles").val() > 0) {
        uncles_share('yes');
    }
    if ($("#number-halfuncles").val() > 0) {
        halfuncles_share('yes');
    }
    if ($("#number-cousins").val() > 0) {
        cousins_share('yes');
    }
    if ($("#number-halfcousins").val() > 0) {
        halfcousins_share('yes');
    }
}
function reset_share() {
    if ($("#inheritance-amount").val() != 0) {
        $("#inheritance-amount").val("");
        update_amount();
    }
    if ($("#number-sons").val() != 0) {
        $("#number-sons").val("");
        sons_share('yes');
    }
    if ($("#number-daughters").val() != 0) {
        $("#number-daughters").val("");
        daughters_share('yes');
    }
    if ($("#number-grandsons").val() != 0) {
        $("#number-grandsons").val("");
        grandsons_share('yes');
    }
    if ($("#number-granddaughters").val() != 0) {
        $("#number-granddaughters").val("");
        granddaughters_share('yes');
    }
    if ($("#number-grandgrandsons").val() != 0) {
        $("#number-grandgrandsons").val("");
        grandgrandsons_share('yes');
    }
    if ($("#number-grandgranddaughters").val() != 0) {
        $("#number-grandgranddaughters").val("");
        grandgranddaughters_share('yes');
    }
    if ($("#number-halfbrothers-m").val() != 0) {
        $("#number-halfbrothers-m").val("");
        halfbrothersisters_m_share('yes');
    }
    if ($("#number-halfsisters-m").val() != 0) {
        $("#number-halfsisters-m").val("");
        halfbrothersisters_m_share('yes');
    }
    if ($("#number-brothers").val() != 0) {
        $("#number-brothers").val("");
        brothers_share('yes');
    }
    if ($("#number-sisters").val() != 0) {
        $("#number-sisters").val("");
        sisters_share('yes');
    }
    if ($("#number-halfbrothers-f").val() != 0) {
        $("#number-halfbrothers-f").val("");
        halfbrothers_f_share('yes');
    }
    if ($("#number-halfsisters-f").val() != 0) {
        $("#number-halfsisters-f").val("");
        halfsisters_f_share('yes');
    }
    if ($("#number-father").val() != 0) {
        $("#number-father").val("");
        father_share('yes');
    }
    if ($("#number-grandfather-f").val() != 0) {
        $("#number-grandfather-f").val("");
        grandfather_f_share('yes');
    }
    if ($("#number-fathergrandfather-f").val() != 0) {
        $("#number-fathergrandfather-f").val("");
        fathergrandfather_f_share('yes');
    }
    if ($("#number-mother").val() != 0) {
        $("#number-mother").val("");
        mother_share('yes');
    }
    if ($("#number-grandmother-f").val() != 0) {
        $("#number-grandmother-f").val("");
        grandmother_f_share('yes');
    }
    if ($("#number-grandmother-m").val() != 0) {
        $("#number-grandmother-m").val("");
        grandmother_m_share('yes');
    }
    if ($("#number-mothergrandfather-f").val() != 0) {
        $("#number-mothergrandfather-f").val("");
        mothergrandfather_f_share('yes');
    }
    if ($("#number-mothergrandmother-f").val() != 0) {
        $("#number-mothergrandmother-f").val("");
        mothergrandmother_f_share('yes');
    }
    if ($("#number-mothergrandmother-m").val() != 0) {
        $("#number-mothergrandmother-m").val("");
        mothergrandmother_m_share('yes');
    }
    if ($("#number-husband").val() != 0) {
        $("#number-husband").val("");
        husband_share('yes');
    }
    if ($("#number-wifes").val() != 0) {
        $("#number-wifes").val("");
        wifes_share('yes');
    }
    if ($("#number-nieces").val() != 0) {
        $("#number-nieces").val("");
        nieces_share('yes');
    }
    if ($("#number-halfnieces").val() != 0) {
        $("#number-halfnieces").val("");
        halfnieces_share('yes');
    }
    if ($("#number-uncles").val() != 0) {
        $("#number-uncles").val("");
        uncles_share('yes');
    }
    if ($("#number-halfuncles").val() != 0) {
        $("#number-halfuncles").val("");
        halfuncles_share('yes');
    }
    if ($("#number-cousins").val() != 0) {
        $("#number-cousins").val("");
        cousins_share('yes');
    }
    if ($("#number-halfcousins").val() != 0) {
        $("#number-halfcousins").val("");
        halfcousins_share('yes');
    }
}
//-------------------------

//descendant share
function daughters_share_check() {
    var share;
    if ($("#number-daughters").val() != 0) {
        if ($("#number-sons").val() > 0) {
            share = 0;
        }
        else if ($("#number-daughters").val() > 1) {
            share = (get_inheritance() * 2) / 3;
        }
        else {
            share = get_inheritance() / 2;
        }
    }
    else {
        share = 0;
    }
    return share;
}
function granddaughters_share_check() {
    var share;
    if ($("#number-granddaughters").val() != 0) {
        if ($("#number-sons").val() > 0 ||
            $("#number-grandsons").val() > 0) {
            share = 0;
        }
        else if ($("#number-daughters").val() > 0) {
            share = get_inheritance() / 6;
        }
        else if ($("#number-granddaughters").val() > 1) {
            share = (get_inheritance() * 2) / 3;
        }
        else {
            share = get_inheritance() / 2;
        }
    }
    else {
        share = 0;
    }
    return share;
}
function grandgranddaughters_share_check() {
    var share;
    if ($("#number-grandgranddaughters").val() != 0) {
        if ($("#number-sons").val() > 0 ||
            $("#number-grandsons").val() > 0 ||
            $("#number-grandgrangsons").val() > 0 ||
            ($("#number-daughters").val() > 0 && $("#number-granddaughters").val() > 0 && $("#number-grandgrandsons").val() == 0)) {
            share = 0;
        }
        else if ($("#number-daughters").val() > 0 ||
                $("#number-granddaughters").val() > 0) {
            share = get_inheritance() / 6;
        }
        else if ($("#number-grandgranddaughters").val() > 1) {
            share = (get_inheritance() * 2) / 3;
        }
        else {
            share = get_inheritance() / 2;
        }
    }
    else {
        share = 0;
    }
    return share;
}
function sons_share(update) {
    if ($("#number-sons").val() < 0) {
        min_value(0, "#number-sons");
    }
    var share;
    var number_male = $("#number-sons").val() * 1;
    var number_male_2 = number_male * 2;
    var number_female = $("#number-daughters").val() * 1;
    var number_siblings = number_male_2 + number_female;
    if (number_male != 0) {
        if (number_female == 0) {
            share = rest_inheritance();
        }
        else {
            share = (rest_inheritance() * number_male_2) / number_siblings;
        }
    }
    else {
        share = 0;
    }
    set_share(share, "#number-sons");
    if (number_male != 0) {
        set_share_each(share / number_male, "#number-sons");
    }

    if (update == 'yes') {
        update_share("sons");
    }
}
function daughters_share(update) {
    if ($("#number-daughters").val() < 0) {
        min_value(0, "#number-daughters");
    }
    var share;
    var number_male = $("#number-sons").val() * 1;
    var number_male_2 = number_male * 2;
    var number_female = $("#number-daughters").val() * 1;
    var number_siblings = number_male_2 + number_female;
    if (number_female != 0) {
        if (number_male == 0) {
            share = daughters_share_check();
        }
        else {
            share = (rest_inheritance() * number_female) / number_siblings;
        }
    }
    else {
        share = 0;
    }
    set_share(share, "#number-daughters");
    if (number_female != 0) {
        set_share_each(share / number_female, "#number-daughters");
    }
    
    if (update == 'yes') {
        update_share("daughters");
    }
}
function grandsons_share(update) {
    if ($("#number-grandsons").val() < 0) {
        min_value(0, "#number-grandsons");
    }
    var share;
    var number_male = $("#number-grandsons").val() * 1;
    var number_male_2 = number_male * 2;
    var number_female = $("#number-granddaughters").val() * 1;
    var number_siblings = number_male_2 + number_female;
    if (number_male != 0) {
        if ($("#number-sons").val() > 0) {
            share = 0;
        }
        else if (number_female == 0) {
            share = rest_inheritance();
        }
        else {
            share = (rest_inheritance() * number_male_2) / number_siblings;
        }
    }
    else {
        share = 0;
    }
    set_share(share, "#number-grandsons");
    if (number_male != 0) {
        set_share_each(share / number_male, "#number-grandsons");
    }
    
    if (update == 'yes') {
        update_share("grandsons");
    }
}
function granddaughters_share(update) {
    if ($("#number-granddaughters").val() < 0) {
        min_value(0, "#number-granddaughters");
    }
    var share;
    var number_male = $("#number-grandsons").val() * 1;
    var number_male_2 = number_male * 2;
    var number_female = $("#number-granddaughters").val() * 1;
    var number_siblings = number_male_2 + number_female;
    if (number_female != 0) {
        if ($("#number-sons").val() > 0) {
            share = 0;
        }
        else if (number_male == 0) {
            share = granddaughters_share_check();
        }
        else {
            share = (rest_inheritance() * number_female) / number_siblings;
        }
    }
    else {
        share = 0;
    }
    set_share(share, "#number-granddaughters");
    if (number_female != 0) {
        set_share_each(share / number_female, "#number-granddaughters");
    }
    
    if (update == 'yes') {
        update_share("granddaughters");
    }
}
function grandgrandsons_share(update) {
    if ($("#number-grandgrandsons").val() < 0) {
        min_value(0, "#number-grandgrandsons");
    }
    var share;
    var number_male = $("#number-grandgrandsons").val() * 1;
    var number_male_2 = number_male * 2;
    var number_female = $("#number-grandgranddaughters").val() * 1;
    var number_siblings = number_male_2 + number_female;
    if (number_male != 0) {
        if ($("#number-sons").val() > 0 || 
            $("#number-grandsons").val() > 0) {
            share = 0;
        }
        else if (number_female == 0) {
            share = rest_inheritance();
        }
        else {
            share = (rest_inheritance() * number_male_2) / number_siblings;
        }
    }
    else {
        share = 0;
    }
    set_share(share, "#number-grandgrandsons");
    if (number_male != 0) {
        set_share_each(share / number_male, "#number-grandgrandsons");
    }
    
    if (update == 'yes') {
        update_share("grandgrandsons");
    }
}
function grandgranddaughters_share(update) {
    if ($("#number-grandgranddaughters").val() < 0) {
        min_value(0, "#number-grandgranddaughters");
    }
    var share;
    var number_male = $("#number-grandgrandsons").val() * 1;
    var number_male_2 = number_male * 2;
    var number_female = $("#number-grandgranddaughters").val() * 1;
    var number_siblings = number_male_2 + number_female;
    if (number_female != 0) {
        if ($("#number-sons").val() > 0 ||
            $("#number-grandsons").val() > 0 ||
            ($("#number-daughters").val() > 0 && $("#number-granddaughters").val() > 0 && $("#number-grandgrandsons").val() == 0)) {
            share = 0;
        }
        else if (number_male == 0) {
            share = grandgranddaughters_share_check();
        }
        else {
            share = (rest_inheritance() * number_female) / number_siblings;
        }
    }
    else {
        share = 0;
    }
    set_share(share, "#number-grandgranddaughters");
    if (number_female != 0) {
        set_share_each(share / number_female, "#number-grandgranddaughters");
    }
    
    if (update == 'yes') {
        update_share("grandgranddaughters");
    }
}
//-------------------------

//siblings share
function siblings_blocker_check() {
    if ($("#number-sons").val() > 0 || 
        $("#number-grandsons").val() > 0 ||
        $("#number-grandgrandsons").val() > 0 ||
        $("#number-father").val() > 0 ||
        $("#number-grandfather-f").val() > 0 ||
        $("#fathergrandfather-f").val() > 0) {
        return true;
    }
    else {
        return false;
    }
}
function half_siblings_f_blocker_check() {
    if ($("#number-sons").val() > 0 || 
        $("#number-grandsons").val() > 0 ||
        $("#number-grandgrandsons").val() > 0 ||
        $("#number-father").val() > 0 ||
        $("#number-grandfather-f").val() > 0 ||
        $("#number-fathergrandfather-f").val() > 0 ||
        $("#number-brothers").val() > 0) {
        return true;
    }
    else {
        return false;
    }
}
function half_siblings_m_blocker_check() {
    if ($("#number-sons").val() > 0 ||
        $("#number-daughters").val() > 0 ||
        $("#number-grandsons").val() > 0 ||
        $("#number-granddaughters").val() > 0 ||
        $("#number-grandgrandsons").val() > 0 ||
        $("#number-grandgranddaughters").val() > 0 ||
        $("#number-father").val() > 0 ||
        $("#number-grandfather-f").val() > 0 ||
        $("#number-fathergrandfather-f").val() > 0) {
        return true;
    }
    else {
        return false;
    }
}
function sisters_share_check() {
    var share;
    if ($("#number-sisters").val() != 0) {
        if (siblings_blocker_check == true ||
            $("#number-brothers").val() > 0) {
            share = 0;
        }
        else if ($("#number-sisters").val() > 1) {
            share = (get_inheritance() * 2) / 3;
        }
        else {
            share = get_inheritance() / 2;
        }
    }
    else {
        share = 0;
    }
    return share;
}
function halfsisters_f_share_check() {
    var share;
    if ($("#number-halfsisters-f").val() != 0) {
        if (half_siblings_f_blocker_check == true ||
            $("#number-halfbrothers-f").val() > 0) {
            share = 0;
        }
        else if ($("#number-sisters").val() > 0) {
            share = get_inheritance() / 6;
        }
        else if ($("#number-halfsisters-f").val() > 1) {
            share = (get_inheritance() * 2) / 3;
        }
        else {
            share = get_inheritance() / 2;
        }
    }
    else {
        share = 0;
    }
    return share;
}
function halfbrothersisters_m_share(update) {
    if ($("#number-halfbrothers-m").val() < 0) {
        min_value(0, "#number-halfbrothers-m");
    }
    if ($("#number-halfsisters-m").val() < 0) {
        min_value(0, "#number-halfsisters-m");
    }
    var number_male = $("#number-halfbrothers-m").val() * 1;
    var number_female = $("#number-halfsisters-m").val() * 1;
    var number_siblings = number_male  + number_female;
    var share;
    if (number_siblings != 0) {
        if (number_male == 0 ||
            number_female == 0) {
            if (half_siblings_m_blocker_check() == true) {
                share = 0;
            }
            else if (number_siblings > 1) {
                share = get_inheritance() / 3;
            }
            else {
                share = get_inheritance() / 6;
            }
        }
        else {
            if (half_siblings_m_blocker_check() == true) {
                share = 0;
            }
            else if (number_siblings > 1) {
                share = get_inheritance() / (3 * 2);
            }
            else {
                share = get_inheritance() / (6 * 2);
            }
        }
    }
    else {
        share = 0;
    }

    var share_male;
    var share_female;
    if (number_male == 0) {
        share_male = 0;
    }
    else {
        share_male = share;
    }
    if (number_female == 0) {
        share_female = 0;
    }
    else {
        share_female = share;
    }
    set_share(share_male, "#number-halfbrothers-m");
    set_share(share_female, "#number-halfsisters-m");
    if (number_male != 0) {
        set_share_each(share_male / number_male, "#number-halfbrothers-m");
    }
    if (number_female != 0) {
        set_share_each(share_female / number_female, "#number-halfsisters-m");
    }
    
    if (update == 'yes') {
        update_share("halfbrothersisters-m");
    }

    if (number_male == 0 ||
        number_female == 0) {
        return share;
    }
    else {
        return share * 2;
    }
}
function brothers_share(update) {
    if ($("#number-brothers").val() < 0) {
        min_value(0, "#number-brothers");
    }
    var share;
    var number_male = $("#number-brothers").val() * 1;
    var number_male_2 = number_male * 2;
    var number_female = $("#number-sisters").val() * 1;
    var number_siblings = number_male_2 + number_female;
    if (number_male != 0) {
        if (siblings_blocker_check() == true) {
            share = 0;
        }
        else if (number_female == 0) {
            share = rest_inheritance();
        }
        else {
            share = (rest_inheritance() * number_male_2) / number_siblings;
        }
    }
    else {
        share = 0;
    }
    set_share(share, "#number-brothers");
    if (number_male != 0) {
        set_share_each(share / number_male, "#number-brothers");
    }
    
    if (update == 'yes') {
        update_share("brothers");
    }
}
function sisters_share(update) {
    if ($("#number-sisters").val() < 0) {
        min_value(0, "#number-sisters");
    }
    var share;
    var number_male = $("#number-brothers").val() * 1;
    var number_male_2 = number_male * 2;
    var number_female = $("#number-sisters").val() * 1;
    var number_siblings = number_male_2 + number_female;
    if (number_female != 0) {
        if (siblings_blocker_check() == true) {
            share = 0;
        }
        else if (number_male == 0) {
            share = sisters_share_check();
        }
        else {
            share = (rest_inheritance() * number_female) / number_siblings;
        }
    }
    else {
        share = 0;
    }
    set_share(share, "#number-sisters");
    if (number_female != 0) {
        set_share_each(share / number_female, "#number-sisters");
    }
    
    if (update == 'yes') {
        update_share("sisters");
    }
}
function halfbrothers_f_share(update) {
    if ($("#number-halfbrothers-f").val() < 0) {
        min_value(0, "#number-halfbrothers-f");
    }
    var share;
    var number_male = $("#number-halfbrothers-f").val() * 1;
    var number_male_2 = number_male * 2;
    var number_female = $("#number-halfsisters-f").val() * 1;
    var number_siblings = number_male_2 + number_female;
    if (number_male != 0) {
        if (half_siblings_f_blocker_check() == true) {
            share = 0;
        }
        else if (number_female == 0) {
            share = rest_inheritance();
        }
        else {
            share = (rest_inheritance() * number_male_2) / number_siblings;
        }
    }
    else {
        share = 0;
    }
    set_share(share, "#number-halfbrothers-f");
    if (number_male != 0) {
        set_share_each(share / number_male, "#number-halfbrothers-f");
    }
    
    if (update == 'yes') {
        update_share("halfbrothers-f");
    }
}
function halfsisters_f_share(update) {
    if ($("#number-halfsisters-f").val() < 0) {
        min_value(0, "#number-halfsisters-f");
    }
    var share;
    var number_male = $("#number-halbrothers-f").val() * 1;
    var number_male_2 = number_male * 2;
    var number_female = $("#number-halfsisters-f").val() * 1;
    var number_siblings = number_male_2 + number_female;
    if (number_female != 0) {
        if (half_siblings_f_blocker_check() == true) {
            share = 0;
        }
        else if (number_male == 0) {
            share = halfsisters_f_share_check();
        }
        else {
            share = (rest_inheritance() * number_female) / number_siblings;
        }
    }
    else {
        share = 0;
    }
    set_share(share, "#number-halfsisters-f");
    if (number_female != 0) {
        set_share_each(share / number_female, "#number-halfsisters-f");
    }
    
    if (update == 'yes') {
        update_share("halfsisters-f");
    }
}
//-------------------------

//male ancestors share
function male_ancestors_check() {
    if ($("#number-sons").val() > 0 || 
        $("#number-grandsons").val() > 0 ||
        $("#number-grandgrandsons").val() > 0) {
        return false;
    }
    else {
        return true;
    }
}
function male_ancestors_share() {
    var share = get_inheritance() / 6;
    return share;
}
function father_share_check() {
    var share;
    if ($("#number-father").val() != 0) {
        share = male_ancestors_share();
    }
    else {
        share = 0;
    }
    return share;
}
function grandfather_f_share_check() {
    var share;
    if ($("#number-grandfather-f").val() != 0) {
        if ($("#number-father").val() != 0) {
            share = 0;
        }
        else {
            share = male_ancestors_share();
        }
    }
    else {
        share = 0;
    }
    return share;
}
function fathergrandfather_f_share_check() {
    var share;
    if ($("#number-fathergrandfather-f").val() != 0) {
        if ($("#number-father").val() != 0 ||
            $("#number-grandfather-f").val() != 0) {
            share = 0;
        }
        else {
            share = male_ancestors_share();
        }
    }
    else {
        share = 0;
    }
    return share;
}
function father_share(update) {
    if ($("#number-father").val() < 0) {
        min_value(0, "#number-father");
    }
    if ($("#number-father").val() > 1) {
        max_value(1, "#number-father");
    }
    var share = father_share_check();
    if ($("#number-father").val() != 0) {
        if (male_ancestors_check() == false) {
            share = share;
        }
        else {
            share = share + rest_inheritance();
        }
    }
    else {
        share = 0;
    }
    set_share(share, "#number-father");
    
    if (update == 'yes') {
        update_share("father");
    }
}
function grandfather_f_share(update) {
    if ($("#number-grandfather-f").val() < 0) {
        min_value(0, "#number-grandfather-f");
    }
    if ($("#number-grandfather-f").val() > 1) {
        max_value(1, "#number-grandfather-f");
    }
    var share = grandfather_f_share_check();
    if ($("#number-grandfather-f").val() != 0) {
        if ($("#number-father").val() > 0) {
            share = 0;
        }
        else if (male_ancestors_check() == false) {
            share = share;
        }
        else {
            share = share + rest_inheritance();
        }
    }
    else {
        share = 0;
    }
    set_share(share, "#number-grandfather-f");
    
    if (update == 'yes') {
        update_share("grandfather-f");
    }
}
function fathergrandfather_f_share(update) {
    if ($("#number-fathergrandfather-f").val() < 0) {
        min_value(0, "#number-fathergrandfather-f");
    }
    if ($("#number-fathergrandfather-f").val() > 1) {
        max_value(1, "#number-fathergrandfather-f");
    }
    var share = fathergrandfather_f_share_check();
    if ($("#number-fathergrandfather-f").val() != 0) {
        if ($("#number-father").val() > 0 || 
            $("#number-grandfather-f").val() > 0) {
            share = 0;
        }
        else if (male_ancestors_check() == false ||
            $("#number-father").val() > 0) {
            share = share;
        }
        else {
            share = share + rest_inheritance();
        }
    }
    else {
        share = 0;
    }
    set_share(share, "#number-fathergrandfather-f");
    
    if (update == 'yes') {
        update_share("fathergrandfather-f");
    }
}
//-------------------------

//female ancestors share
function female_ancestors_check() {
    if ($("#number-sons").val() > 0 || 
        $("#number-grandsons").val() > 0 ||
        $("#number-grandgrandsons").val() > 0 ||
        $("#number-brother").val() > 1 ||
        $("#number-sisters").val() > 1) {
        return true;
    }
    else {
        return false;
    }
}
function mother_share(update) {
    if ($("#number-mother").val() < 0) {
        min_value(0, "#number-mother");
    }
    if ($("#number-mother").val() > 1) {
        max_value(1, "#number-mother");
    }
    var share;
    if ($("#number-mother").val() != 0) {
        if (female_ancestors_check() == true) {
            share = get_inheritance() / 6;
        }
        else {
            share = get_inheritance() / 3;
        }
    }
    else {
        share = 0;
    }
    set_share(share, "#number-mother");
    
    if (update == 'yes') {
        update_share("mother");
    }
    return share;
}
function grandmother_f_share(update) {
    if ($("#number-grandmother-f").val() < 0) {
        min_value(0, "#number-grandmother-f");
    }
    if ($("#number-grandmother-f").val() > 1) {
        max_value(1, "#number-grandmother-f");
    }
    var share;
    if ($("#number-grandmother-f").val() != 0) {
        if ($("#number-father").val() > 0 ||
            $("#number-mother").val() > 0) {
            share = 0;
        }
        else if (female_ancestors_check() == true) {
            share = get_inheritance() / 6;
        }
        else {
            share = get_inheritance() / 3;
        }
    }
    else {
        share = 0;
    }
    set_share(share, "#number-grandmother-f");
    
    if (update == 'yes') {
        update_share("grandmother-f");
    }
    return share;
}
function grandmother_m_share(update) {
    if ($("#number-grandmother-m").val() < 0) {
        min_value(0, "#number-grandmother-m");
    }
    if ($("#number-grandmother-m").val() > 1) {
        max_value(1, "#number-grandmother-m");
    }
    var share;
    if ($("#number-grandmother-m").val() != 0) {
        if ($("#number-mother").val() > 0) {
            share = 0;
        }
        else if (female_ancestors_check() == true) {
            share = get_inheritance() / 6;
        }
        else {
            share = get_inheritance() / 3;
        }
    }
    else {
        share = 0;
    }
    set_share(share, "#number-grandmother-m");
    
    if (update == 'yes') {
        update_share("grandmother-m");
    }
    return share;
}
function mothergrandfather_f_share(update) {
    if ($("#number-mothergrandfather-f").val() < 0) {
        min_value(0, "#number-mothergrandfather-f");
    }
    if ($("#number-mothergrandfather-f").val() > 1) {
        max_value(1, "#number-mothergrandfather-f");
    }
    var share;
    if ($("#number-mothergrandfather-f").val() != 0) {
        if ($("#number-father").val() > 0 ||
            $("#number-mother").val() > 0 ||
            $("#grandfather-f").val() > 0 ||
            $("#grandmother-f").val() > 0) {
            share = 0;
        }
        else if (female_ancestors_check() == true) {
            share = get_inheritance() / 6;
        }
        else {
            share = get_inheritance() / 3;
        }
    }
    else {
        share = 0;
    }
    set_share(share, "#number-mothergrandfather-f");
    
    if (update == 'yes') {
        update_share("mothergrandfather-f");
    }
    return share;
}
function mothergrandmother_f_share(update) {
    if ($("#number-mothergrandmother-f").val() < 0) {
        min_value(0, "#number-mothergrandmother-f");
    }
    if ($("#number-mothergrandmother-f").val() > 1) {
        max_value(1, "#number-mothergrandmother-f");
    }
    var share;
    if ($("#number-mothergrandmother-f").val() != 0) {
        if ($("#number-father").val() > 0 ||
            $("#number-mother").val() > 0 ||
            $("#grandmother-f").val() > 0) {
            share = 0;
        }
        else if (female_ancestors_check() == true) {
            share = get_inheritance() / 6;
        }
        else {
            share = get_inheritance() / 3;
        }
    }
    else {
        share = 0;
    }
    set_share(share, "#number-mothergrandmother-f");
    
    if (update == 'yes') {
        update_share("mothergrandmother-f");
    }
    return share;
}
function mothergrandmother_m_share(update) {
    if ($("#number-mothergrandmother-m").val() < 0) {
        min_value(0, "#number-mothergrandmother-m");
    }
    if ($("#number-mothergrandmother-m").val() > 1) {
        max_value(1, "#number-mothergrandmother-m");
    }
    var share;
    if ($("#number-mothergrandmother-m").val() != 0) {
        if ($("#number-mother").val() > 0 ||
            $("#grandmother-m").val() > 0) {
            share = 0;
        }
        else if (female_ancestors_check() == true) {
            share = get_inheritance() / 6;
        }
        else {
            share = get_inheritance() / 3;
        }
    }
    else {
        share = 0;
    }
    set_share(share, "#number-mothergrandmother-m");
    
    if (update == 'yes') {
        update_share("mothergrandmother-m");
    }
    return share;
}
//-------------------------

//husband/wifes share
function parents_check() {
    if ($("#number-sons").val() > 0 ||
        $("#number-daughters").val() > 0 || 
        $("#number-grandsons").val() > 0 ||
        $("#number-grandgrandsons").val() > 0) {
        return true;
    }
    else {
        return false;
    }
}
function husband_share(update) {
    if ($("#number-husband").val() < 0) {
        min_value(0, "#number-husband");
    }
    if ($("#number-husband").val() > 1) {
        max_value(1, "#number-husband");
    }
    var share;
    if ($("#number-husband").val() != 0) {
        if (parents_check() == true) {
            share = get_inheritance() / 4;
        }
        else {
            share = get_inheritance() / 2;
        }
    }
    else {
        share = 0;
    }
    set_share(share, "#number-husband");
    
    if (update == 'yes') {
        update_share("husband");
    }
    return share;
}
function wifes_share(update) {
    if ($("#number-wifes").val() < 0) {
        min_value(0, "#number-wifes");
    }
    if ($("#number-wifes").val() > 4) {
        max_value(4, "#number-wifes");
    }
    var share;
    if ($("#number-wifes").val() != 0) {
        if (parents_check() == true) {
            share = get_inheritance() / 8;
        }
        else {
            share = get_inheritance() / 4;
        }
    }
    else {
        share = 0;
    }
    set_share(share, "#number-wifes");
    if ($("#number-wifes").val() != 0) {
        set_share_each(share / $("#number-wifes").val(), "#number-wifes");
    }
    
    if (update == 'yes') {
        update_share("wifes");
    }
    return share;
}
//-------------------------

//siblings' descendant share
function nieces_share(update) {
    if ($("#number-nieces").val() < 0) {
        min_value(0, "#number-nieces");
    }
    var share;
    if ($("#number-nieces").val() != 0) {
        if ($("#number-sons").val() > 0 ||
            $("#number-grandsons").val() > 0 ||
            $("#number-grandgrandsons").val() > 0 ||
            $("#number-father").val() > 0 ||
            $("#number-grandfather-f").val() > 0 ||
            $("#number-fathergrandfather-f").val() > 0 ||
            $("#number-brothers").val() > 0 ||
            $("#number-halfbrother-f").val() > 0) {
            share = 0;
        }
        else {
            share = rest_inheritance();
        }
    }
    else {
        share = 0;
    }
    set_share(share, "#number-nieces");
    if ($("#number-nieces").val() != 0) {
        set_share_each(share / $("#number-nieces").val(), "#number-nieces");
    }
    
    if (update == 'yes') {
        update_share("nieces");
    }
}
function halfnieces_share(update) {
    if ($("#number-halfnieces").val() < 0) {
        min_value(0, "#number-halfnieces");
    }
    var share;
    if ($("#number-halfnieces").val() != 0) {
        if ($("#number-sons").val() > 0 ||
            $("#number-grandsons").val() > 0 ||
            $("#number-grandgrandsons").val() > 0 ||
            $("#number-father").val() > 0 ||
            $("#number-grandfather-f").val() > 0 ||
            $("#number-fathergrandfather-f").val() > 0 ||
            $("#number-brothers").val() > 0 ||
            $("#number-halfbrother-f").val() > 0 ||
            $("#number-nieces").val() > 0) {
            share = 0;
        }
        else {
            share = rest_inheritance();
        }
    }
    else {
        share = 0;
    }
    set_share(share, "#number-halfnieces");
    if ($("#number-halfnieces").val() != 0) {
        set_share_each(share / $("#number-halfnieces").val(), "#number-halfnieces");
    }
    
    if (update == 'yes') {
        update_share("halfnieces");
    }
}
//-------------------------

//father's siblings share
function uncles_share(update) {
    if ($("#number-uncles").val() < 0) {
        min_value(0, "#number-uncles");
    }
    var share;
    if ($("#number-uncles").val() != 0) {
        if ($("#number-sons").val() > 0 ||
            $("#number-grandsons").val() > 0 ||
            $("#number-grandgrandsons").val() > 0 ||
            $("#number-father").val() > 0 ||
            $("#number-grandfather-f").val() > 0 ||
            $("#number-fathergrandfather-f").val() > 0 ||
            $("#number-brothers").val() > 0 ||
            $("#number-halfbrother-f").val() > 0 ||
            $("#number-nieces").val() > 0 ||
            $("#number-halfnieces").val() > 0) {
            share = 0;
        }
        else {
            share = rest_inheritance();
        }
    }
    else {
        share = 0;
    }
    set_share(share, "#number-uncles");
    if ($("#number-uncles").val() != 0) {
        set_share_each(share / $("#number-uncles").val(), "#number-uncles");
    }
    
    if (update == 'yes') {
        update_share("uncles");
    }
}
function halfuncles_share(update) {
    if ($("#number-halfuncles").val() < 0) {
        min_value(0, "#number-halfuncles");
    }
    var share;
    if ($("#number-halfuncles").val() != 0) {
        if ($("#number-sons").val() > 0 ||
            $("#number-grandsons").val() > 0 ||
            $("#number-grandgrandsons").val() > 0 ||
            $("#number-father").val() > 0 ||
            $("#number-grandfather-f").val() > 0 ||
            $("#number-fathergrandfather-f").val() > 0 ||
            $("#number-brothers").val() > 0 ||
            $("#number-halfbrother-f").val() > 0 ||
            $("#number-nieces").val() > 0 ||
            $("#number-halfnieces").val() > 0 ||
            $("#number-uncles").val() > 0) {
            share = 0;
        }
        else {
            share = rest_inheritance();
        }
    }
    else {
        share = 0;
    }
    set_share(share, "#number-halfuncles");
    if ($("#number-halfuncles").val() != 0) {
        set_share_each(share / $("#number-halfuncles").val(), "#number-halfuncles");
    }
    
    if (update == 'yes') {
        update_share("halfuncles");
    }
}
function cousins_share(update) {
    if ($("#number-cousins").val() < 0) {
        min_value(0, "#number-cousins");
    }
    var share;
    if ($("#number-cousins").val() != 0) {
        if ($("#number-sons").val() > 0 ||
            $("#number-grandsons").val() > 0 ||
            $("#number-grandgrandsons").val() > 0 ||
            $("#number-father").val() > 0 ||
            $("#number-grandfather-f").val() > 0 ||
            $("#number-fathergrandfather-f").val() > 0 ||
            $("#number-brothers").val() > 0 ||
            $("#number-halfbrother-f").val() > 0 ||
            $("#number-nieces").val() > 0 ||
            $("#number-halfnieces").val() > 0 ||
            $("#number-uncles").val() > 0 ||
            $("#number-halfuncles").val() > 0) {
            share = 0;
        }
        else {
            share = rest_inheritance();
        }
    }
    else {
        share = 0;
    }
    set_share(share, "#number-cousins");
    if ($("#number-cousins").val() != 0) {
        set_share_each(share / $("#number-cousins").val(), "#number-cousins");
    }
    
    if (update == 'yes') {
        update_share("cousins");
    }
}
function halfcousins_share(update) {
    if ($("#number-halfcousins").val() < 0) {
        min_value(0, "#number-halfcousins");
    }
    var share;
    if ($("#number-halfcousins").val() != 0) {
        if ($("#number-sons").val() > 0 ||
            $("#number-grandsons").val() > 0 ||
            $("#number-grandgrandsons").val() > 0 ||
            $("#number-father").val() > 0 ||
            $("#number-grandfather-f").val() > 0 ||
            $("#number-fathergrandfather-f").val() > 0 ||
            $("#number-brothers").val() > 0 ||
            $("#number-halfbrother-f").val() > 0 ||
            $("#number-nieces").val() > 0 ||
            $("#number-halfnieces").val() > 0 ||
            $("#number-uncles").val() > 0 ||
            $("#number-halfuncles").val() > 0 ||
            $("#number-cousins").val() > 0) {
            share = 0;
        }
        else {
            share = rest_inheritance();
        }
    }
    else {
        share = 0;
    }
    set_share(share, "#number-halfcousins");
    if ($("#number-halfcousins").val() != 0) {
        set_share_each(share / $("#number-halfcousins").val(), "#number-halfcousins");
    }
    
    if (update == 'yes') {
        update_share("halfcousins");
    }
}
//-------------------------