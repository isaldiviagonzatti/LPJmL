/**************************************************************************************/
/**                                                                                \n**/
/**              l  p  j  p  a  r  a  m  .  j  s                                   \n**/
/**                                                                                \n**/
/**     LPJ parameter file for LPJmL version 5.7.9                                 \n**/
/**                                                                                \n**/
/** (C) Potsdam Institute for Climate Impact Research (PIK), see COPYRIGHT file    \n**/
/** authors, and contributors see AUTHORS file                                     \n**/
/** This file is part of LPJmL and licensed under GNU AGPL Version 3               \n**/
/** or later. See LICENSE file or go to http://www.gnu.org/licenses/               \n**/
/** Contact: https://github.com/PIK-LPJmL/LPJmL                                    \n**/
/**                                                                                \n**/
/**************************************************************************************/

"param" :
{
  "minlandfrac" : 1e-6,      /* minimum land fraction used if landfrac=0 */
  "tinyfrac" : 1e-6,         /* minimum land-use fraction used by all_crops */
  "k_litter10" : 0.3,        /* k_litter10  (1/yr) */
  "k_soil10" : { "fast" : 0.03, "slow":  0.001}, /* fast, slow k_soil10  (1/yr) */
  "init_soiln" : { "fast" : 3500.0, "slow":  3500.0}, /* initial fast and slow soil nitrogen (gN/m2) */
  "maxsnowpack": 20000.0,    /* max. snow pack (mm) */
  "soildepth_evap" : 300.0,  /* depth of sublayer at top of upper soil layer (mm) */
  "soil_infil" : 2.0,        /* default soil infiltration */
  "soil_infil_litter" : 2.0, /* soil infiltration intensification by litter cover*/
  "co2_p" : 278.0,           /* pre-industrial CO2 (ppmv) */
  "k" : 0.0548,              /* k    k = 7.4e-7 * atomic_mass_C / atomic_mass_N * seconds_per_day = 0.0548 Sprugel et al. 1996, Eqn 7*/
  "theta" : 0.9,             /* theta */
  "alphac3" : 0.08,          /* alphac3 */
  "alphac4" : 0.053,         /* alphac4 */
  "r_growth" : 0.25,         /* r_growth */
  "GM" : 2.41,               /* GM empirical parameter in demand function */
  "ALPHAM" : 1.485,          /* ALPHAM Priestley-Taylor coefficient*/
  "ko25" : 3.0e4,            /* Michaelis constant for O2 (Pa) at 25 deg C */
  "kc25" : 30.0,              /* Michaelis constant for CO2 (Pa) at 25 deg C */
  "atmfrac" : 0.6,           /* atmfrac */
  "fastfrac" : 0.98,         /* fastfrac */
  "bioturbate" : 0.5,        /* bioturbation (0 = no bioturbation) */
  "veg_equil_year" : 300,    /* number of years to get vegetation into equilibrium (before forst call of equisoil) */
  "veg_equil_unlim" : false, /* enable vegetation spinup without nitrogen limitation */
  "nequilsoil" : 160,        /* number of equisoil calls */
  "equisoil_interval" : 15,  /* time interval between equisoil calls */
  "equisoil_years": 10,      /* number of years used in calculation for equisoil */
  "equisoil_fadeout": 300,   /* number of years for equisoil fadeout (for final call of equisoil); set to zero for no fadeout  */
  "k_max": 0.10,             /* k_max, maximum fraction of soil->NH4 assumed to be nitrified Parton, 2001*/
  "fpc_tree_max" : 0.95,     /* maximum foliage projective cover for trees */
  "temp_response" : 56.02,   /* Parameter in temperature response function */
  "percthres" : 1.0,
  "k_2": 0.01,               /* k_2, fraction of nitrified N lost as N20 flux Parton, 2001*/
  "p" : 25,                  /* Haxeltine & Prentice regression coefficient */
  "n0" : 7.15,               /* Haxeltine & Prentice regression coefficient */
  "k_temp" : 0.02,           /* factor of temperature dependence of nitrogen demand for Rubisco activity */
  "min_c_bnf" : 20,          /* threshold C root content for BNF */
  "par_sink_limit" : 0.2,    /* Michaelis-Menten scaler of sink limitation */
  "q_ash" : 0.45,            /* fraction of nitrogen going to litter after fire */
  "sapwood_recovery" : 0.2,  /* recovery of sapwood nitrogen */
  "T_m" : 15.0,              /* parameter in N uptake temperature function */
  "T_0" : -25.0,             /* parameter in N uptake temperature function */
  "T_r" : 15.0,              /* parameter in N uptake temperature function */
  "lsuha" : 0.0,             /* livestock density applied for daily or rotational grazing on mangement grasslands */
  "k_mort" : 0.2,            /* coefficient of growth efficiency in mortality equation (k_mort2) */
  "residue_rate": 200,       /* fixed residue rate in gC/m2/yr, ignored if <=0 and if pool >0  */
  "residue_pool" : 100,      /* fixed aboveground residue pool in gC/m2, ignored if <=0, overrules constant rate */
  "residue_cn": 20,         /* CN ratio of prescribed residues */
  "residue_fbg": 0.25,      /* belowground fraction of prescribed residues */
  "residue_frac" : 0.95,      /* fraction of residues to be submerged by tillage */
  "manure_cn": 14.5,        /* CN ration of manure gC/gN */
  "fertilizer_rate" : 10,     /* default: 20; fixed fertilizer application rate in gN/m2/yr */
  "manure_rate" : 0,          /* default: 20; fixed manure application rate in gN/m2/yr */
  "mixing_efficiency" : 0.9,  /* mixing efficiency of tillage */
  "aprec_lim" : 900,         /* annual prec limit for C3 threshold (mm) */
  "irrig_soilfrac" : 1.0,             /* fraction of soil filled with water during irrigation event */
  "canal_conveyance_eff_sand" : 0.7,  /* open canal conveyance efficiency, soil type sand (Ks > 20)*/
  "canal_conveyance_eff_loam" : 0.75, /* open canal conveyance efficiency, soil type loam (10<=Ks<=20)*/
  "canal_conveyance_eff_clay" : 0.8,  /* open canal conveyance efficiency, soil type clay (Ks<10) */
  "pipe_conveyance_eff" : 0.95,       /* pressurized conveyance efficiency*/
  "saturation_level_surf" : 1.0,      /* saturation level surface irrigation*/
  "saturation_level_sprink" : 0.55,   /* saturation level sprinkler irrigation*/
  "saturation_level_drip" : 0.05,     /* saturation level drip irrigation*/
  "drip_evap_reduction" : 0.6,        /* reduction of drip soil evap */
  "nfert_split" : 0,                  /* threshold fertilizer input for split application */
  "nfert_split_frac" : 0.2,           /* fraction of fertilizer input at sowing */
  "nfert_no3_frac" : 0.5,             /* fraction of NO3 in fertilizer input */
  "nmanure_nh4_frac" : 0.666667,      /* fraction of NH4 in manure input */
  "residues_in_soil" : 0.3,           /* minimum residues in soil*/
  "residues_in_soil_notillage" : 0.1,  /* minimum residues in soil before till_startyear (only if tilled) */
  "fburnt" : 1.0,                     /* fraction of trees burnt at deforestation, refers to remainder after timber harvest */
  "ftimber" : 0.76,                   /* timber fraction at deforestation */
  "ftimber_wp" : 0.76,                /* timber fraction for wood plantations */
  "harvest_fast_frac" : 0.34,         /* fraction of harvested wood going to fast pools */
  "product_turnover" : { "fast" : 0.1, "slow" : 0.01}, /* product turnover (1/yr) */
  "esoil_reduction" : 0.0,            /* reduction of soil evaporation */
  "rw_buffer_max" : 0.0,              /* size of rainwater harvesting tank [mm] */
  "frac_ro_stored" : 0.0,             /* fraction of surface runoff stored in tank */
  "rw_irrig_thres" : 0.0,             /* threshold to apply rw_irrigation */
  "soil_infil_rw" : 2.0,              /* values > 2 (default) increase soil infiltration on rainfed and irrigated managed land */
  "yield_gap_bridge" : 0.0,           /* factor by which laimax value is closed (7 - country-value)*factor */
  "allocation_threshold" : 35.0,      /* allocation threshold for daily grassland allocation */
  "hfrac2" : 2500.0,
  "hfrac_biomass" : 0.75,             /* harvest fraction of biomass grass */
  "firedura" : -11.06,                /* scaling factor for fire duration for the WVPD*/
  "hum_ign" : -0.50,		      /* a parameter for scaling the human ignintions within SPITFIRE */
  "fire_intens" : 0.000001,           /* threshold of fireintensity for which burnt area can be modeled */
  "rootreduction" : 0.5,              /* fraction used to calculate amount of roots dying at harvest in managed grasslands */
  "phen_limit" : 0.5,                 /* phen. limit for agricultural trees */
  #ifdef BMGR_BROWN
    "bmgr_harvest_day_nh" : 32.0,     /* harvest date (doy) of brown biomass grass harvest; NH 1.Feb */
    "bmgr_harvest_day_sh" : 213.0,    /* harvest date (doy) of brown biomass grass harvest; SH 1.Aug */
  #else
    "bmgr_harvest_day_nh" : 275.0,    /* harvest date (doy) of green biomass grass harvest; NH 1.Oct */
    "bmgr_harvest_day_sh" : 92.0,     /* harvest date (doy) of green biomass grass harvest; SH 1.Apr */
  #endif
  "nfrac_grassharvest" : 0.5,         /* fraction of nitrogen from grass harvest not returned to NH4 pool via manure after mowing*/
  "nfrac_grazing" : 0.5               /* fraction of nitrogen from grass harvest not returned to NH4 pool via manure from livestock*/
},
