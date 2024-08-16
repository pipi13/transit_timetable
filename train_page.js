const up_str = `[
{"num":530,"type":"特　急","name":"いなほ　２号","time":"5:30","dest":"　新　潟　"},
{"num":700,"type":"特　急","name":"いなほ　４号","time":"7:00","dest":"　新　潟　"},
{"num":703,"type":"普　通","name":"","time":"7:03","dest":"　村　上　"},
{"num":801,"type":"普　通","name":"","time":"8:01","dest":"　鼠ヶ関　"},
{"num":912,"type":"特　急","name":"いなほ　６号","time":"9:12","dest":"　新　潟　"},
{"num":937,"type":"普　通","name":"","time":"9:37","dest":"　村　上　"},
{"num":1146,"type":"普　通","name":"","time":"11:46","dest":"　鶴　岡　"},
{"num":1211,"type":"特　急","name":"いなほ　８号","time":"12:12","dest":"　新　潟　"},
{"num":1253,"type":"普　通","name":"","time":"12:53","dest":"　村　上　"},
{"num":1413,"type":"普　通","name":"","time":"14:13","dest":"あつみ温泉"},
{"num":1442,"type":"特　急","name":"いなほ１０号","time":"14:42","dest":"　新　潟　"},
{"num":1445,"type":"普　通","name":"","time":"14:45","dest":"　新　津　"},
{"num":1605,"type":"特　急","name":"いなほ１２号","time":"16:05","dest":"　新　潟　"},
{"num":1610,"type":"普　通","name":"","time":"16:10","dest":"　村　上　"},
{"num":1733,"type":"普　通","name":"","time":"17:33","dest":"　新　津　"},
{"num":1818,"type":"特　急","name":"いなほ１４号","time":"18:18","dest":"　新　潟　"},
{"num":1917,"type":"普　通","name":"","time":"19:17","dest":"　鼠ヶ関　"},
{"num":2012,"type":"普　通","name":"","time":"20:12","dest":"　村　上　"},
{"num":2141,"type":"普　通","name":"","time":"21:41","dest":"　鼠ヶ関　"},
{"num":9999,"type":"","name":"","time":"","dest":""}]`;

const dn_str = `[
{"num":750,"type":"普　通","name":"","time":"7:50","dest":"　酒　田　"},
{"num":814,"type":"普　通","name":"","time":"8:14","dest":"　酒　田　"},
{"num":932,"type":"普　通","name":"","time":"9:32","dest":"　酒　田　"},
{"num":1030,"type":"特　急","name":"いなほ　１号","time":"10:30","dest":"　秋　田　"},
{"num":1131,"type":"普　通","name":"","time":"11:31","dest":"　酒　田　"},
{"num":1222,"type":"普　通","name":"","time":"12:22","dest":"　酒　田　"},
{"num":1300,"type":"特　急","name":"いなほ　３号","time":"13:00","dest":"　酒　田　"},
{"num":1425,"type":"普　通","name":"","time":"14:25","dest":"　酒　田　"},
{"num":1449,"type":"特　急","name":"いなほ　５号","time":"14:49","dest":"　秋　田　"},
{"num":1615,"type":"普　通","name":"","time":"16:15","dest":"　酒　田　"},
{"num":1654,"type":"普　通","name":"","time":"16:54","dest":"　酒　田　"},
{"num":1658,"type":"特　急","name":"いなほ　７号","time":"16:58","dest":"　秋　田　"},
{"num":1825,"type":"普　通","name":"","time":"18:25","dest":"　酒　田　"},
{"num":1929,"type":"普　通","name":"","time":"19:29","dest":"　酒　田　"},
{"num":2007,"type":"特　急","name":"いなほ　９号","time":"20:07","dest":"　酒　田　"},
{"num":2058,"type":"普　通","name":"","time":"20:58","dest":"　酒　田　"},
{"num":2203,"type":"特　急","name":"いなほ１１号","time":"22:03","dest":"　酒　田　"},
{"num":2220,"type":"普　通","name":"","time":"22:20","dest":"　酒　田　"},
{"num":2316,"type":"特　急","name":"いなほ１３号","time":"23:16","dest":"　酒　田　"},
{"num":9999,"type":"","name":"","time":"","dest":""}]`;

const up = JSON.parse(up_str);
const dn = JSON.parse(dn_str);

const b_color = "#101010"
const t_color = "#ffffff"
const exp_color = "#ff0000"
const local_color = "#404040"

const exp = "特　急"
const local = "普　通"

function Display() {
	var rt = new Date();
	var hour_now = ("0" + rt.getHours()).slice(-2);
	var mins_now = ("0" + rt.getMinutes()).slice(-2);
	var sec_now = rt.getSeconds()
	var n_now = Number(hour_now + mins_now);
	document.getElementById("hour").innerHTML = hour_now;
	document.getElementById("mins").innerHTML = mins_now;
	if (sec_now%2 == 0) {
		document.querySelector("#colon").style.color = t_color;
		
	} else {
		document.querySelector("#colon").style.color = b_color;
	}
	
	if ( 500<=n_now && n_now<=up[18].num) {
		for (var n_up = 0; n_up <= 18; n_up++ ) {
			if (n_now <= up[n_up].num) {
				if (!(sec_now%2==1 && n_now==up[n_up].num)) {
					document.getElementById("up1_type").innerHTML = up[n_up].type;
					if (up[n_up].type == exp) {
						document.querySelector("#up1_type").style.backgroundColor = exp_color;
					} else if (up[n_up].type == local) {
						document.querySelector("#up1_type").style.backgroundColor = local_color;
					} else {
						document.querySelector("#up1_type").style.backgroundColor = b_color;
					}
					document.getElementById("up1_name").innerHTML = up[n_up].name;
					document.getElementById("up1_time").innerHTML = up[n_up].time;
					document.getElementById("up1_dest").innerHTML = up[n_up].dest;
				} else {
					document.getElementById("up1_type").innerHTML = "";
					document.querySelector("#up1_type").style.backgroundColor = b_color;
					document.getElementById("up1_name").innerHTML = "";
					document.getElementById("up1_time").innerHTML = "";
					document.getElementById("up1_dest").innerHTML = "";
				}
				document.getElementById("up2_type").innerHTML = up[n_up+1].type;
				if (up[n_up+1].type == exp) {
					document.querySelector("#up2_type").style.backgroundColor = exp_color;
				} else if (up[n_up+1].type == local) {
					document.querySelector("#up2_type").style.backgroundColor = local_color;
				} else {
					document.querySelector("#up2_type").style.backgroundColor = b_color;
				}
				document.getElementById("up2_name").innerHTML = up[n_up+1].name;
				document.getElementById("up2_time").innerHTML = up[n_up+1].time;
				document.getElementById("up2_dest").innerHTML = up[n_up+1].dest;
				break;
			}
		}
	} else {
		var n_up = 18;
		document.getElementById("up1_type").innerHTML = "";
		document.querySelector("#up1_type").style.backgroundColor = b_color;
		document.getElementById("up1_name").innerHTML = "";
		document.getElementById("up1_time").innerHTML = "";
		document.getElementById("up1_dest").innerHTML = "";
		document.getElementById("up2_type").innerHTML = "";
		document.querySelector("#up2_type").style.backgroundColor = b_color;
		document.getElementById("up2_name").innerHTML = "";
		document.getElementById("up2_time").innerHTML = "";
		document.getElementById("up2_dest").innerHTML = "";
	}

	if ( 500<=n_now && n_now<=dn[18].num) {
		for (var n_dn = 0; n_dn <= 18; n_dn++ ) {
			if (n_now <= dn[n_dn].num) {
				if (!(sec_now%2==1 && n_now==dn[n_dn].num)) {
					document.getElementById("down1_type").innerHTML = dn[n_dn].type;
					if (dn[n_dn].type == exp) {
						document.querySelector("#down1_type").style.backgroundColor = exp_color;
					} else if (dn[n_dn].type == local) {
						document.querySelector("#down1_type").style.backgroundColor = local_color;
					} else {
						document.querySelector("#down1_type").style.backgroundColor = b_color;
					}
					document.getElementById("down1_name").innerHTML = dn[n_dn].name;
					document.getElementById("down1_time").innerHTML = dn[n_dn].time;
					document.getElementById("down1_dest").innerHTML = dn[n_dn].dest;
				} else {
					document.getElementById("down1_type").innerHTML = "";
					document.querySelector("#down1_type").style.backgroundColor = b_color;
					document.getElementById("down1_name").innerHTML = "";
					document.getElementById("down1_time").innerHTML = "";
					document.getElementById("down1_dest").innerHTML = "";
				}
				document.getElementById("down2_type").innerHTML = dn[n_dn+1].type;
				if (dn[n_dn+1].type == exp) {
					document.querySelector("#down2_type").style.backgroundColor = exp_color;
				} else if (dn[n_dn+1].type == local) {
					document.querySelector("#down2_type").style.backgroundColor = local_color;
				} else {
					document.querySelector("#down2_type").style.backgroundColor = b_color;
				}
				document.getElementById("down2_name").innerHTML = dn[n_dn+1].name;
				document.getElementById("down2_time").innerHTML = dn[n_dn+1].time;
				document.getElementById("down2_dest").innerHTML = dn[n_dn+1].dest;
				break;
			}
		}
	} else {
		var n_dn = 18;
		document.getElementById("down1_type").innerHTML = "";
		document.querySelector("#down1_type").style.backgroundColor = b_color;
		document.getElementById("down1_name").innerHTML = "";
		document.getElementById("down1_time").innerHTML = "";
		document.getElementById("down1_dest").innerHTML = "";
		document.getElementById("down2_type").innerHTML = "";
		document.querySelector("#down2_type").style.backgroundColor = b_color;
		document.getElementById("down2_name").innerHTML = "";
		document.getElementById("down2_time").innerHTML = "";
		document.getElementById("down2_dest").innerHTML = "";
	}
	if ( 2316<n_now || n_now<500) {
		document.getElementById("bottom").innerHTML = "本日の運行は終了しました";
		document.querySelector("#bottom").style.color = t_color;
	} else if (n_now==up[n_up].num || n_now==dn[n_dn].num) {
		if (sec_now%2 == 0) {
			document.getElementById("bottom").innerHTML = "列車が通過します";
			document.querySelector("#bottom").style.color = "red";
		} else {
			document.querySelector("#bottom").style.color = b_color;
		}
	} else {
		document.getElementById("bottom").innerHTML = "";
		document.querySelector("#bottom").style.color = t_color;
	}
}


setInterval(Display,1000);
