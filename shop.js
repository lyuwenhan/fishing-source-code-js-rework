import lang from "./lang.js";
import * as data from "./data.js";
import * as functions from "./functions.js";
async function shop0(){
	if(data.gameState.dataSaver.aquariumCapacity > 30){
		data.gameState.dataSaver.aquariumCapacity = 30;
	}
	await functions.clear();
	await functions.print(sh_main1);
	await functions.print(sh_hook);
	if(data.gameState.dataSaver.level === data.constant.max_level){
		await functions.print("    " + lang.current.shop.max_level_reached);
	}else{
		await functions.print(sh_hook1 + to_string((data.gameState.dataSaver.mintime[data.gameState.dataSaver.data_saver.level] + data.gameState.dataSaver.maxtime[data.gameState.dataSaver.data_saver.level]) >> 1) + (((data.gameState.dataSaver.mintime[data.gameState.dataSaver.data_saver.level] + data.gameState.dataSaver.maxtime[data.gameState.dataSaver.data_saver.level]) & 1) ? ".5" : "") + sh_hook2 + to_string((data.gameState.dataSaver.mintime[data.gameState.dataSaver.data_saver.level + 1] + data.gameState.dataSaver.maxtime[data.gameState.dataSaver.data_saver.level + 1]) >> 1) + (((data.gameState.dataSaver.mintime[data.gameState.dataSaver.data_saver.level + 1] + data.gameState.dataSaver.maxtime[data.gameState.dataSaver.data_saver.level + 1]) & 1) ? ".5" : ""));
		await functions.print(sh_cost + to_string(data.gameState.dataSaver.cost[data.gameState.dataSaver.data_saver.level + 1]) + sh_curgold + to_string(data.gameState.dataSaver.data_saver.money));
	}
	await functions.print(sh_get);
	if(data.gameState.dataSaver.data_saver.get_level === data.gameState.dataSaver.max_level2){
		print(sh_mlr);
	}else{
		print(sh_get1 + to_string((data.gameState.dataSaver.minget[data.gameState.dataSaver.data_saver.get_level] + data.gameState.dataSaver.maxget[data.gameState.dataSaver.data_saver.get_level]) >> 1) + (((data.gameState.dataSaver.minget[data.gameState.dataSaver.data_saver.get_level] + data.gameState.dataSaver.maxget[data.gameState.dataSaver.data_saver.get_level]) & 1) ? ".5" : "") + sh_get2 + to_string((data.gameState.dataSaver.minget[data.gameState.dataSaver.data_saver.get_level + 1] + data.gameState.dataSaver.maxget[data.gameState.dataSaver.data_saver.get_level + 1]) >> 1) + (((data.gameState.dataSaver.minget[data.gameState.dataSaver.data_saver.get_level + 1] + data.gameState.dataSaver.maxget[data.gameState.dataSaver.data_saver.get_level + 1]) & 1) ? ".5" : ""));
		print(sh_cost + to_string(data.gameState.dataSaver.cost2[data.gameState.dataSaver.data_saver.get_level + 1]) + sh_curgold + to_string(data.gameState.dataSaver.data_saver.money));
	}
	print(sh_hoff);
	if(data.gameState.dataSaver.data_saver.slip === 0){
		print(sh_mlr);
	}else{
		if(data.gameState.dataSaver.data_saver.slip > 10){
			data.gameState.dataSaver.data_saver.slip /= 10;
			data.gameState.dataSaver.data_saver.slip *= 10;
			print(sh_slip_cur_a + to_string(data.gameState.dataSaver.data_saver.slip) + sh_slip_cur_b + to_string(data.gameState.dataSaver.data_saver.slip - 10) + "%");
			print(sh_slip_cost100 + to_string(data.gameState.dataSaver.data_saver.money));
		}else if(data.gameState.dataSaver.data_saver.slip > 5){
			data.gameState.dataSaver.data_saver.slip = 10;
			print(sh_slip_lit_10_5);
			print(sh_slip_cost100 + to_string(data.gameState.dataSaver.data_saver.money));
		}else if(data.gameState.dataSaver.data_saver.slip > 1){
			print(sh_slip_cur_a + to_string(data.gameState.dataSaver.data_saver.slip) + sh_slip_cur_b + to_string(data.gameState.dataSaver.data_saver.slip - 1) + "%");
			print(sh_slip_cost100 + to_string(data.gameState.dataSaver.data_saver.money));
		}else{
			print(sh_slip_lit_1_0);
			print(sh_slip_cost500 + to_string(data.gameState.dataSaver.data_saver.money));
		}
	}
	print(fi_clji);
	print(sh_cl_qty + to_string(data.gameState.dataSaver.data_saver.cleaning_ball));
	print(sh_cost10 + to_string(data.gameState.dataSaver.data_saver.money));
	print(sh_cl_eff_title);
	if(data.gameState.dataSaver.data_saver.cleaning_sub >= 10){
		print(sh_mlr);
	}else{
		print(sh_cl_sub_a + to_string(data.gameState.dataSaver.data_saver.cleaning_sub) + sh_cl_sub_b + to_string(data.gameState.dataSaver.data_saver.cleaning_sub + 1) + sh_cl_sub_c);
		print(sh_cost30 + to_string(data.gameState.dataSaver.data_saver.money));
	}
	print(sh_aq_title);
	if(data.gameState.dataSaver.data_saver.aqcnt >= 30){
		print(sh_mlr);
	}else{
		print(sh_aq_cap_a + to_string(data.gameState.dataSaver.data_saver.aqcnt) + sh_aq_cap_b + to_string(data.gameState.dataSaver.data_saver.aqcnt + 2) + sh_aq_cap_c);
		print(sh_purchase_cost + to_string((data.gameState.dataSaver.data_saver.aqcnt + 2) * 100) + sh_curgold + to_string(data.gameState.dataSaver.data_saver.money));
	}
	print(sh_oven_title);
	if(data.gameState.dataSaver.data_saver.roast >= 3){
		print(sh_oven_max);
	}else{
		print(sh_oven_cur + to_string(data.gameState.dataSaver.data_saver.roast));
		if(data.gameState.dataSaver.data_saver.roast < 1){
			print(sh_oven_c50 + to_string(data.gameState.dataSaver.data_saver.money));
		}else if(data.gameState.dataSaver.data_saver.roast === 1){
			print(sh_oven_c1000 + to_string(data.gameState.dataSaver.data_saver.money));
		}else{
			print(sh_oven_c2000 + to_string(data.gameState.dataSaver.data_saver.money));
		}
	}
	while(true){
		while(true){
			char type = getch();
			if(type === '1'){
				if(data.gameState.dataSaver.data_saver.level === data.gameState.dataSaver.max_level){
					print(sh_msg_max);
					sleep(0.5);
					break;
				}else if(data.gameState.dataSaver.data_saver.money < data.gameState.dataSaver.cost[data.gameState.dataSaver.data_saver.level + 1]){
					print(fi_mnng);
					sleep(0.5);
					break;
				}else{
					data.gameState.dataSaver.data_saver.money -= data.gameState.dataSaver.cost[++data.gameState.dataSaver.data_saver.level];
					print(sh_msg_ok);
					sleep(0.5);
					break;
				}
			}else if(type === '2'){
				if(data.gameState.dataSaver.data_saver.get_level === data.gameState.dataSaver.max_level2){
					print(sh_msg_max);
					sleep(0.5);
					break;
				}else if(data.gameState.dataSaver.data_saver.money < data.gameState.dataSaver.cost2[data.gameState.dataSaver.data_saver.get_level + 1]){
					print(fi_mnng);
					sleep(0.5);
					break;
				}else{
					data.gameState.dataSaver.data_saver.money -= data.gameState.dataSaver.cost2[++data.gameState.dataSaver.data_saver.get_level];
					print(sh_msg_ok);
					sleep(0.5);
					break;
				}
			}else if(type === '3'){
				if(data.gameState.dataSaver.data_saver.slip === 0){
					print(sh_msg_max);
					sleep(0.5);
					break;
				}else if(data.gameState.dataSaver.data_saver.slip === 1){
					if(data.gameState.dataSaver.data_saver.money < 500){
						print(fi_mnng);
						sleep(0.5);
						break;
					}else{
						data.gameState.dataSaver.data_saver.money -= 500;
						data.gameState.dataSaver.data_saver.slip = 0;
						print(sh_msg_ok);
						sleep(0.5);
						break;
					}
				}else{
					if(data.gameState.dataSaver.data_saver.money < 100){
						print(fi_mnng);
						sleep(0.5);
						break;
					}else{
						data.gameState.dataSaver.data_saver.money -= 100;
						if(data.gameState.dataSaver.data_saver.slip > 10){
							data.gameState.dataSaver.data_saver.slip -= 10;
						}else if(data.gameState.dataSaver.data_saver.slip > 5){
							data.gameState.dataSaver.data_saver.slip = 5;
						}else if(data.gameState.dataSaver.data_saver.slip > 0){
							data.gameState.dataSaver.data_saver.slip -= 1;
						}
						print(sh_msg_ok);
						sleep(0.5);
						break;
					}
				}
			}else if(type === '4'){
				if(data.gameState.dataSaver.data_saver.money < 10){
					print(fi_mnng);
					sleep(0.5);
					break;
				}else{
					data.gameState.dataSaver.data_saver.cleaning_ball++;
					print(sh_msg_ok);
					data.gameState.dataSaver.data_saver.money -= 10;
					break;
				}
			}else if(type === '5'){
				if(data.gameState.dataSaver.data_saver.cleaning_sub === 10){
					print(sh_msg_max);
					sleep(0.5);
					break;
				}else if(data.gameState.dataSaver.data_saver.money < 30){
					print(fi_mnng);
					sleep(0.5);
					break;
				}else{
					data.gameState.dataSaver.data_saver.money -= 30;
					data.gameState.dataSaver.data_saver.cleaning_sub++;
					print(sh_msg_ok);
					sleep(0.5);
					break;
				}
			}else if(type === '6'){
				if(data.gameState.dataSaver.data_saver.aqcnt === 30){
					print(sh_msg_max);
					sleep(0.5);
					break;
				}else if(data.gameState.dataSaver.data_saver.money < (data.gameState.dataSaver.data_saver.aqcnt + 2) * 100){
					print(fi_mnng);
					sleep(0.5);
					break;
				}else{
					data.gameState.dataSaver.data_saver.money -= (data.gameState.dataSaver.data_saver.aqcnt + 2) * 100;
					data.gameState.dataSaver.data_saver.aqcnt += 2;
					print(sh_msg_ok);
					sleep(0.5);
					break;
				}
			}else if(type === '7'){
				if(data.gameState.dataSaver.data_saver.roast >= 3){
					print(sh_oven_max);
					sleep(0.5);
					break;
				}else{
					if(data.gameState.dataSaver.data_saver.roast < 1){
						if(data.gameState.dataSaver.data_saver.money < 50){
							print(fi_mnng);
							sleep(0.5);
							break;
						}else{
							data.gameState.dataSaver.data_saver.money -= 50;
							data.gameState.dataSaver.data_saver.roast = 1;
							print(sh_msg_ok);
							sleep(0.5);
							break;
						}
					}else if(data.gameState.dataSaver.data_saver.roast === 1){
						if(data.gameState.dataSaver.data_saver.money < 1000){
							print(fi_mnng);
							sleep(0.5);
							break;
						}else{
							data.gameState.dataSaver.data_saver.money -= 1000;
							data.gameState.dataSaver.data_saver.roast = 2;
							print(sh_msg_ok);
							sleep(0.5);
							break;
						}
					}else{
						if(data.gameState.dataSaver.data_saver.money < 2000){
							print(fi_mnng);
							sleep(0.5);
							break;
						}else{
							data.gameState.dataSaver.data_saver.money -= 2000;
							data.gameState.dataSaver.data_saver.roast = 3;
							print(sh_msg_ok);
							sleep(0.5);
							break;
						}
					}
				}
			}else if(type === '8'){
				return;
			}
		}
		clear();
		cout << sh_main1 << endl;
		cout << sh_hook << endl;
		if(data.gameState.dataSaver.data_saver.level === data.gameState.dataSaver.max_level){
			cout << sh_mlr << endl;
		}else{
			cout << sh_hook1 << to_string((data.gameState.dataSaver.mintime[data.gameState.dataSaver.data_saver.level] + data.gameState.dataSaver.maxtime[data.gameState.dataSaver.data_saver.level]) >> 1) << (((data.gameState.dataSaver.mintime[data.gameState.dataSaver.data_saver.level] + data.gameState.dataSaver.maxtime[data.gameState.dataSaver.data_saver.level]) & 1) ? ".5" : "") << sh_hook2 << to_string((data.gameState.dataSaver.mintime[data.gameState.dataSaver.data_saver.level + 1] + data.gameState.dataSaver.maxtime[data.gameState.dataSaver.data_saver.level + 1]) >> 1) << (((data.gameState.dataSaver.mintime[data.gameState.dataSaver.data_saver.level + 1] + data.gameState.dataSaver.maxtime[data.gameState.dataSaver.data_saver.level + 1]) & 1) ? ".5" : "") << endl;
			cout << sh_cost << to_string(data.gameState.dataSaver.cost[data.gameState.dataSaver.data_saver.level + 1]) << sh_curgold << to_string(data.gameState.dataSaver.data_saver.money) << endl;
		}
		cout << sh_get << endl;
		if(data.gameState.dataSaver.data_saver.get_level === data.gameState.dataSaver.max_level2){
			cout << sh_mlr << endl;
		}else{
			cout << sh_get1 << to_string((data.gameState.dataSaver.minget[data.gameState.dataSaver.data_saver.get_level] + data.gameState.dataSaver.maxget[data.gameState.dataSaver.data_saver.get_level]) >> 1) << (((data.gameState.dataSaver.minget[data.gameState.dataSaver.data_saver.get_level] + data.gameState.dataSaver.maxget[data.gameState.dataSaver.data_saver.get_level]) & 1) ? ".5" : "") << sh_get2 << to_string((data.gameState.dataSaver.minget[data.gameState.dataSaver.data_saver.get_level + 1] + data.gameState.dataSaver.maxget[data.gameState.dataSaver.data_saver.get_level + 1]) >> 1) << (((data.gameState.dataSaver.minget[data.gameState.dataSaver.data_saver.get_level + 1] + data.gameState.dataSaver.maxget[data.gameState.dataSaver.data_saver.get_level + 1]) & 1) ? ".5" : "") << endl;
			cout << sh_cost << to_string(data.gameState.dataSaver.cost2[data.gameState.dataSaver.data_saver.get_level + 1]) << sh_curgold << to_string(data.gameState.dataSaver.data_saver.money) << endl;
		}
		cout << sh_hoff << endl;
		if(data.gameState.dataSaver.data_saver.slip === 0){
			cout << sh_mlr << endl;
		}else{
			if(data.gameState.dataSaver.data_saver.slip > 10){
				data.gameState.dataSaver.data_saver.slip /= 10;
				data.gameState.dataSaver.data_saver.slip *= 10;
				cout << sh_slip_cur_a << to_string(data.gameState.dataSaver.data_saver.slip) << sh_slip_cur_b << to_string(data.gameState.dataSaver.data_saver.slip - 10) << "%" << endl;
				cout << sh_slip_cost100 << to_string(data.gameState.dataSaver.data_saver.money) << endl;
			}else if(data.gameState.dataSaver.data_saver.slip > 5){
				data.gameState.dataSaver.data_saver.slip = 10;
				cout << sh_slip_lit_10_5 << endl;
				cout << sh_slip_cost100 << to_string(data.gameState.dataSaver.data_saver.money) << endl;
			}else if(data.gameState.dataSaver.data_saver.slip > 1){
				cout << sh_slip_cur_a << to_string(data.gameState.dataSaver.data_saver.slip) << sh_slip_cur_b << to_string(data.gameState.dataSaver.data_saver.slip - 1) << "%" << endl;
				cout << sh_slip_cost100 << to_string(data.gameState.dataSaver.data_saver.money) << endl;
			}else{
				cout << sh_slip_lit_1_0 << endl;
				cout << sh_slip_cost500 << to_string(data.gameState.dataSaver.data_saver.money) << endl;
			}
		}
		cout << fi_clji << endl;
		cout << sh_cl_qty << to_string(data.gameState.dataSaver.data_saver.cleaning_ball) << endl;
		cout << sh_cost10 << to_string(data.gameState.dataSaver.data_saver.money) << endl;
		cout << sh_cl_eff_title << endl;
		if(data.gameState.dataSaver.data_saver.cleaning_sub >= 10){
			cout << sh_mlr << endl;
		}else{
			cout << sh_cl_sub_a << to_string(data.gameState.dataSaver.data_saver.cleaning_sub) << sh_cl_sub_b << to_string(data.gameState.dataSaver.data_saver.cleaning_sub + 1) << sh_cl_sub_c << endl;
			cout << sh_cost30 << to_string(data.gameState.dataSaver.data_saver.money) << endl;
		}
		cout << sh_aq_title << endl;
		if(data.gameState.dataSaver.data_saver.aqcnt >= 30){
			cout << sh_mlr << endl;
		}else{
			cout << sh_aq_cap_a << to_string(data.gameState.dataSaver.data_saver.aqcnt) << sh_aq_cap_b << to_string(data.gameState.dataSaver.data_saver.aqcnt + 2) << sh_aq_cap_c << endl;
			cout << sh_purchase_cost << to_string((data.gameState.dataSaver.data_saver.aqcnt + 2) * 100) << sh_curgold << to_string(data.gameState.dataSaver.data_saver.money) << endl;
		}
		cout << sh_oven_title << endl;
		if(data.gameState.dataSaver.data_saver.roast >= 3){
			cout << sh_oven_max << endl;
		}else{
			cout << sh_oven_cur << to_string(data.gameState.dataSaver.data_saver.roast) << endl;
			if(data.gameState.dataSaver.data_saver.roast < 1){
				cout << sh_oven_c50 << to_string(data.gameState.dataSaver.data_saver.money) << endl;
			}else if(data.gameState.dataSaver.data_saver.roast === 1){
				cout << sh_oven_c1000 << to_string(data.gameState.dataSaver.data_saver.money) << endl;
			}else{
				cout << sh_oven_c2000 << to_string(data.gameState.dataSaver.data_saver.money) << endl;
			}
		}
	}
}
inline void shop1(){
	clear();
	printa(sh_su_welcome);
	clear();
	print(sh_su_main);
	print(sh_su_cast_title);
	if(data.gameState.dataSaver.data_saver.stime >= 10){
		print(sh_mlr);
	}else{
		print(sh_stime_a + to_string(data.gameState.dataSaver.data_saver.stime) + sh_stime_b + to_string(data.gameState.dataSaver.data_saver.stime + 1) + sh_stime_c);
		print(sh_oven_c1000 + to_string(data.gameState.dataSaver.data_saver.money));
	}
	print(sh_su_bf_title);
	if(data.gameState.dataSaver.data_saver.bf >= 60){
		print(sh_mlr);
	}else{
		print(sh_bf_a + to_string(data.gameState.dataSaver.data_saver.bf) + sh_bf_b + to_string(data.gameState.dataSaver.data_saver.bf + 5) + "%");
		print(sh_oven_c1000 + to_string(data.gameState.dataSaver.data_saver.money));
	}
	while(true){
		while(true){
			char type = getch();
			if(type === '1'){
				if(data.gameState.dataSaver.data_saver.stime >= 10){
					print(sh_msg_max);
					sleep(0.5);
					break;
				}else if(data.gameState.dataSaver.data_saver.money < 1000){
					print(fi_mnng);
					sleep(0.5);
					break;
				}else{
					data.gameState.dataSaver.data_saver.money -= 1000;
					data.gameState.dataSaver.data_saver.stime++;
					print(sh_msg_ok);
					sleep(0.5);
					break;
				}
			}else if(type === '2'){
				if(data.gameState.dataSaver.data_saver.bf >= 60){
					print(sh_msg_max);
					sleep(0.5);
					break;
				}else if(data.gameState.dataSaver.data_saver.money < 1000){
					print(fi_mnng);
					sleep(0.5);
					break;
				}else{
					data.gameState.dataSaver.data_saver.money -= 1000;
					data.gameState.dataSaver.data_saver.bf += 5;
					print(sh_msg_ok);
					sleep(0.5);
					break;
				}
			}else if(type === '3'){
				sleep(0.5);
				return;
			}
		}
		clear();
		cout << sh_su_main << endl;
		cout << sh_su_cast_title << endl;
		if(data.gameState.dataSaver.data_saver.stime >= 10){
			cout << sh_mlr << endl;
		}else{
			cout << sh_stime_a + to_string(data.gameState.dataSaver.data_saver.stime) + sh_stime_b + to_string(data.gameState.dataSaver.data_saver.stime + 1) + sh_stime_c << endl;
			cout << sh_oven_c1000 + to_string(data.gameState.dataSaver.data_saver.money) << endl;
		}
		cout << sh_su_bf_title << endl;
		if(data.gameState.dataSaver.data_saver.bf >= 60){
			cout << sh_mlr << endl;
		}else{
			cout << sh_bf_a + to_string(data.gameState.dataSaver.data_saver.bf) + sh_bf_b + to_string(data.gameState.dataSaver.data_saver.bf + 5) + "%" << endl;
			cout << sh_oven_c1000 + to_string(data.gameState.dataSaver.data_saver.money) << endl;
		}
	}
}
inline void shop(){
	while(true){
		clear();
		print(sh_shop_sel);
		char type;
		while(true){
			type = getch();
			if(type === '1'){
				shop0();
				break;
			}else if(type === '2'){
				shop1();
				break;
			}else if(type === '3'){
				return;
			}
		}
	}
}