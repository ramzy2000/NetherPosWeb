class Pos {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
};

function getNetherPos(overworldPos)
{
	let netherPos = new Pos();
	netherPos.x = overworldPos.x / 8;
	netherPos.y = overworldPos.y;
	netherPos.z = overworldPos.z / 8;
	return netherPos;
}

function getOverworldPos(netherPos)
{
	let overworldPos = new Pos();
	overworldPos.x = netherPos.x * 8;
	overworldPos.y = netherPos.y;
	overworldPos.z = netherPos.z * 8;
	return overworldPos;
}

$(document).ready(function () {

    

    // set the instruction label
    if ($("#mode").val() === "Get Nether Position") {
        $("#instruction-label").text("Enter a world position");
    } else if ($("#mode").val() === "Get World Position") {
        $("#instruction-label").text("Enter a nether position");
    }

    // when the mode changes change the instruction label
    $("#mode").on("change", function () {
        if ($("#mode").val() === "Get Nether Position") {
            $("#instruction-label").text("Enter a world position");
        } else if ($("#mode").val() === "Get World Position") {
            $("#instruction-label").text("Enter a nether position");
        }
    });

    $("#nether-pos-form").on("submit", function() {
        let xPos = $("#xinput").val();
        let yPos = $("#zinput").val();

        if ($("#mode").val() === "Get Nether Position") {
            let netherPos = getNetherPos(new Pos(xPos, 1, yPos));
            $("#result-label").text("X:"+netherPos.x+", Z:"+netherPos.z);
        } else if ($("#mode").val() === "Get World Position") {
            let worldPos = getOverworldPos(new Pos(xPos, 1, yPos));
            $("#result-label").text("X:"+worldPos.x+", Z:"+worldPos.z);
        }

    });
});