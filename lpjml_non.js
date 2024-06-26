/**************************************************************************************/
/**                                                                                \n**/
/**                   l  p  j  m  l  _  n  o  n  .  j  s                           \n**/
/**                                                                                \n**/
/** Configuration file for LPJmL C Version 5.7.9 without nitrogen limitation       \n**/
/**                                                                                \n**/
/** Configuration file is divided into five sections:                              \n**/
/**                                                                                \n**/
/**  I.   Simulation description and type section                                  \n**/
/**  II.  Input parameter section                                                  \n**/
/**  III. Input data section                                                       \n**/
/**  IV.  Output data section                                                      \n**/
/**  V.   Run settings section                                                     \n**/
/**                                                                                \n**/
/** (C) Potsdam Institute for Climate Impact Research (PIK), see COPYRIGHT file    \n**/
/** authors, and contributors see AUTHORS file                                     \n**/
/** This file is part of LPJmL and licensed under GNU AGPL Version 3               \n**/
/** or later. See LICENSE file or go to http://www.gnu.org/licenses/               \n**/
/** Contact: https://github.com/PIK-LPJmL/LPJmL                                    \n**/
/**                                                                                \n**/
/**************************************************************************************/

{   /* LPJmL configuration in JSON format */

/*===================================================================*/
/*  I. Simulation description and type section                       */
/*===================================================================*/

  "sim_name" : "LPJmL run without nitrogen", /* Simulation description */
  "sim_id"   : "lpjml",       /* LPJML Simulation type with managed land use */
  "coupled_model" : null,     /* no model coupling */
  "version"  : "5.7",         /* LPJmL version expected */
  "random_prec" : true,       /* Random weather generator for precipitation enabled */
  "random_seed" : 2,          /* seed for random number generator */
  "radiation" : "radiation",  /* other options: CLOUDINESS, RADIATION, RADIATION_SWONLY, RADIATION_LWDOWN */
  "fire" : "fire",            /* fire disturbance enabled, other options: NO_FIRE, FIRE, SPITFIRE, SPITFIRE_TMAX */
  "firewood" : false,
  "gsi_phenology": true,    /* GSI phenology enabled */
  "transp_suction_fcn" : false,        /* new transpiration reduction function disabled */
  "river_routing" : true,
  "with_lakes" : true,
  "permafrost" : true,
  "extflow" : false,
  "johansen" : true,
  "soilpar_option" : "no_fixed_soilpar", /* other options "no_fixed_soilpar", "fixed_soilpar", "prescribed_soilpar" */
  "with_nitrogen" : "no", /* other options: "no", "lim", "unlim" */
  "store_climate" : true, /* store climate data in spin-up phase */
  "landfrac_from_file" : true, /* read cell area from file (true/false) */
  "shuffle_spinup_climate" : false,
  "fix_climate" : false,
  "fix_landuse" : false,
  "fix_co2" : false,
#ifdef FROM_RESTART
  "new_seed" : false, /* read random seed from restart file */
  "equilsoil" : false,
  "population" : false,
  "landuse" : "yes", /* other options: NO_LANDUSE, LANDUSE, CONST_LANDUSE, ALL_CROPS */
  "landuse_year_const" : 2000, /* set landuse year for CONST_LANDUSE case */
  "reservoir" : true,
  "wateruse" : "yes",  /* other options: NO_WATERUSE, WATERUSE, ALL_WATERUSE */
#else
  "equilsoil" : true,
  "population" : false,
  "landuse" : "no",
  "reservoir" : false,
  "wateruse" : "no",
#endif
  "prescribe_burntarea" : false,
  "prescribe_landcover" : "no_landcover", /* NO_LANDCOVER, LANDCOVERFPC, LANDCOVEREST */
  "sowing_date_option" : "fixed_sdate",   /* NO_FIXED_SDATE, FIXED_SDATE, PRESCRIBED_SDATE */
  "sdate_fixyear" : 1970,               /* year in which sowing dates shall be fixed */
  "intercrop" : true,                   /* intercrops on setaside */
  "tillage_type" : "all",               /* other options:  "all" (all agr. cells tilled), "no" (no cells tilled) and "read" (tillage dataset used) */
  "till_startyear" : 1850,              /* year in which tillage should start */
  "black_fallow" : false,               /* simulation with black fallow on PNV */
  "residue_treatment" : "no_residue_remove",
  "residues_fire" : false,              /* fire in residuals */
  "irrigation" : "lim",                 /* other options: "no", "lim", "pot", "all" */
  "laimax_interpolate" : "laimax_cft",  /* laimax values from manage parameter file, */
                                        /* other options: LAIMAX_CFT, CONST_LAI_MAX, LAIMAX_INTERPOLATE, LAIMAX_PAR  */
  "rw_manage" : false,                  /* rain water management */
  "laimax" : 5,                         /* maximum LAI for CONST_LAI_MAX */
  "luc_timber" : false,
  "grassland_fixed_pft" : false,
  "grass_harvest_options" : false,
  "prescribe_lsuha" : false,
  "grassonly" : false,
  "others_to_crop" : false,             /* move PFT type others into PFT crop, maize for tropical, wheat for temperate */
  "grazing" : "default",                /* default grazing type, other options : "default", "mowing", "ext", "int", "livestock", "none" */
  "grazing_others" : "default",         /* default grazing type for others, other options : "default", "mowing", "ext", "int", "livestock", "none" */
  "crop_phu_option" : "new",
  "cropsheatfrost" : false,
  "double_harvest" : false,

/*===================================================================*/
/*  II. Input parameter section                                      */
/*===================================================================*/

#include "param_non.js"    /* Input parameter file without nitrogen */

/*===================================================================*/
/*  III. Input data section                                          */
/*===================================================================*/

#include "input_crumonthly.js"    /* Input files of CRU dataset */

/*===================================================================*/
/*  IV. Output data section                                          */
/*===================================================================*/

#ifdef WITH_GRIDBASED
  "grid_scaled" : true, /* PFT-specific outputs scaled by stand->frac */
#define SUFFIX grid.bin
#else
  "grid_scaled" : false,
#define SUFFIX pft.bin
#endif

  "output_metafile" : false, /* no json metafile created */
  "float_grid" : false, /* set datatype of grid file to float (TRUE/FALSE) */

#define mkstr(s) xstr(s) /* putting string in quotation marks */
#define xstr(s) #s

#ifdef FROM_RESTART

  "output" :
  [

/*
ID                         Fmt                    filename
-------------------------- ---------------------- ----------------------------- */
    { "id" : "grid",             "file" : { "fmt" : "raw", "name" : "output/grid.bin" }},
    { "id" : "terr_area",        "file" : { "fmt" : "raw", "name" : "output/terr_area.bin" }},
    { "id" : "fpc",              "file" : { "fmt" : "raw", "name" : "output/fpc.bin"}},
    { "id" : "npp",              "file" : { "fmt" : "raw", "name" : "output/mnpp.bin"}},
    { "id" : "gpp",              "file" : { "fmt" : "raw", "name" : "output/mgpp.bin"}},
    { "id" : "rh",               "file" : { "fmt" : "raw", "name" : "output/mrh.bin"}},
    { "id" : "fapar",            "file" : { "fmt" : "raw", "name" : "output/mfapar.bin"}},
    { "id" : "transp",           "file" : { "fmt" : "raw", "name" : "output/mtransp.bin"}},
    { "id" : "runoff",           "file" : { "fmt" : "raw", "name" : "output/mrunoff.bin"}},
    { "id" : "evap",             "file" : { "fmt" : "raw", "name" : "output/mevap.bin"}},
    { "id" : "interc",           "file" : { "fmt" : "raw", "name" : "output/minterc.bin"}},
    { "id" : "swc1",             "file" : { "fmt" : "raw", "name" : "output/mswc1.bin"}},
    { "id" : "swc2",             "file" : { "fmt" : "raw", "name" : "output/mswc2.bin"}},
    { "id" : "firef",            "file" : { "fmt" : "raw", "name" : "output/firef.bin"}},
    { "id" : "vegc",             "file" : { "fmt" : "raw", "name" : "output/vegc.bin"}},
    { "id" : "soilc",            "file" : { "fmt" : "raw", "name" : "output/soilc.bin"}},
    { "id" : "litc",             "file" : { "fmt" : "raw", "name" : "output/litc.bin"}},
    { "id" : "flux_estabc",      "file" : { "fmt" : "raw", "name" : "output/flux_estab.bin"}},
    { "id" : "pft_vegc",         "file" : { "fmt" : "raw", "name" : "output/pft_vegc.bin"}},
    { "id" : "phen_tmin",        "file" : { "fmt" : "raw", "name" : "output/mphen_tmin.bin"}},
    { "id" : "phen_tmax",        "file" : { "fmt" : "raw", "name" : "output/mphen_tmax.bin"}},
    { "id" : "phen_light",       "file" : { "fmt" : "raw", "name" : "output/mphen_light.bin"}},
    { "id" : "phen_water",       "file" : { "fmt" : "raw", "name" : "output/mphen_water.bin"}},
#ifdef WITH_SPITFIRE
    { "id" : "firec",            "file" : { "fmt" : "raw", "timstep" : "monthly", "unit" : "gC/m2/month", "name" : "output/mfirec.bin"}},
    { "id" : "nfire",            "file" : { "fmt" : "raw", "name" : "output/mnfire.bin"}},
    { "id" : "burntarea",        "file" : { "fmt" : "raw", "name" : "output/mburnt_area.bin"}},
#else
    { "id" : "firec",            "file" : { "fmt" : "raw", "name" : "output/firec.bin"}},
#endif
    { "id" : "discharge",        "file" : { "fmt" : "raw", "name" : "output/mdischarge.bin"}},
    { "id" : "wateramount",      "file" : { "fmt" : "raw", "name" : "output/mwateramount.bin"}},
    { "id" : "harvestc",         "file" : { "fmt" : "raw", "name" : "output/flux_harvest.bin"}},
    { "id" : "sdate",            "file" : { "fmt" : "raw", "name" : "output/sdate.bin"}},
    { "id" : "pft_harvestc",     "file" : { "fmt" : "raw", "name" : mkstr(output/pft_harvest.SUFFIX)}},
    { "id" : "cftfrac",          "file" : { "fmt" : "raw", "name" : "output/cftfrac.bin"}},
    { "id" : "seasonality",      "file" : { "fmt" : "raw", "name" : "output/seasonality.bin"}},
    { "id" : "pet",              "file" : { "fmt" : "raw", "name" : "output/mpet.bin"}},
    { "id" : "albedo",           "file" : { "fmt" : "raw", "name" : "output/malbedo.bin"}},
    { "id" : "maxthaw_depth",    "file" : { "fmt" : "raw", "name" : "output/maxthaw_depth.bin"}},
    { "id" : "soiltemp1",        "file" : { "fmt" : "raw", "name" : "output/msoiltemp1.bin"}},
    { "id" : "soiltemp2",        "file" : { "fmt" : "raw", "name" : "output/msoiltemp2.bin"}},
    { "id" : "soiltemp3",        "file" : { "fmt" : "raw", "name" : "output/msoiltemp3.bin"}},
    { "id" : "soilc_layer",      "file" : { "fmt" : "raw", "name" : "output/soilc_layer.bin"}},
    { "id" : "agb",              "file" : { "fmt" : "raw", "name" : "output/agb.bin"}},
    { "id" : "agb_tree",         "file" : { "fmt" : "raw", "name" : "output/agb_tree.bin"}},
    { "id" : "return_flow_b",    "file" : { "fmt" : "raw", "name" : "output/mreturn_flow_b.bin"}},
    { "id" : "transp_b",         "file" : { "fmt" : "raw", "name" : "output/mtransp_b.bin"}},
    { "id" : "evap_b",           "file" : { "fmt" : "raw", "name" : "output/mevap_b.bin"}},
    { "id" : "interc_b",         "file" : { "fmt" : "raw", "name" : "output/mintec_b.bin"}},
    { "id" : "conv_loss_evap",   "file" : { "fmt" : "raw", "name" : "output/aconv_loss_evap.bin"}},
    { "id" : "conv_loss_drain",  "file" : { "fmt" : "raw", "name" : "output/aconv_loss_drain.bin"}}
/*------------------------ ---------------------- ------------------------------- */
  ],

#endif

/*===================================================================*/
/*  V. Run settings section                                          */
/*===================================================================*/

  "startgrid" : "all", /* 27410, 67208 60400 all grid cells */
  "endgrid" : ALL,

#ifdef CHECKPOINT
  "checkpoint_filename" : "restart/restart_checkpoint.lpj", /* filename of checkpoint file */
#endif

#ifndef FROM_RESTART

  "nspinup" : 5000,  /* spinup years */
  "nspinyear" : 30,  /* cycle length during spinup (yr) */
  "firstyear": 1901, /* first year of simulation */
  "lastyear" : 1901, /* last year of simulation */
  "restart" : false, /* do not start from restart file */
  "write_restart" : true, /* create restart file: the last year of simulation=restart-year */
  "write_restart_filename" : "restart/restart_1840_nv_stdfire.lpj", /* filename of restart file */
  "restart_year": 1840 /* write restart at year */

#else

  "nspinup" : 390,   /* spinup years */
  "nspinyear" : 30,  /* cycle length during spinup (yr)*/
  "firstyear": 1901, /* first year of simulation */
  "lastyear" : 2011, /* last year of simulation */
  "outputyear": 1901, /* first year output is written  */
  "restart" :  true, /* start from restart file */
  "restart_filename" : "restart/restart_1840_nv_stdfire.lpj", /* filename of restart file */
  "write_restart" : false, /* create restart file */
  "write_restart_filename" : "restart/restart_1900_crop_stdfire.lpj", /* filename of restart file */
  "restart_year": 1900 /* write restart at year */

#endif
}
