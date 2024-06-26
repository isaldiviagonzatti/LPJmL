/**************************************************************************************/
/**                                                                                \n**/
/**                 a  l  l  o  m  e  t  r  y  _  t  r  e  e  .  c                 \n**/
/**                                                                                \n**/
/**     C implementation of LPJmL                                                  \n**/
/**                                                                                \n**/
/** (C) Potsdam Institute for Climate Impact Research (PIK), see COPYRIGHT file    \n**/
/** authors, and contributors see AUTHORS file                                     \n**/
/** This file is part of LPJmL and licensed under GNU AGPL Version 3               \n**/
/** or later. See LICENSE file or go to http://www.gnu.org/licenses/               \n**/
/** Contact: https://github.com/PIK-LPJmL/LPJmL                                    \n**/
/**                                                                                \n**/
/**************************************************************************************/

#include "lpj.h"
#include "tree.h"

/*
 *  ALLOMETRY
 *  Should be called to update allometry, FPC and FPC increment whenever 
 *  biomass values for a vegetation individual change.
 */

void allometry_tree(Pft *pft /**< Pointer to tree PFT */
                   )
{
  Pfttree *tree;
  const Pfttreepar *treepar;
  Real allometry,stemdiam,sapw_nc;
  Stocks sm_ind_temp;

  tree=pft->data;
  treepar=getpftpar(pft,data);
  tree->height=(tree->ind.sapwood.carbon<=0.0 || tree->ind.leaf.carbon<=0.0) ? 0 : 
               treepar->k_latosa*tree->ind.sapwood.carbon/(tree->ind.leaf.carbon*pft->par->sla*treepar->wood_density);

  if(tree->height>treepar->height_max)
  {
    tree->height=treepar->height_max;
    sm_ind_temp=tree->ind.sapwood;
    sapw_nc=tree->ind.sapwood.nitrogen/tree->ind.sapwood.carbon;
    tree->ind.sapwood.carbon=tree->ind.leaf.carbon*treepar->height_max*treepar->wood_density*pft->par->sla/
                      treepar->k_latosa;
    tree->ind.sapwood.nitrogen-=(sm_ind_temp.nitrogen-tree->ind.sapwood.carbon*sapw_nc)*(1 - param.sapwood_recovery);
    tree->ind.heartwood.carbon+=sm_ind_temp.carbon-tree->ind.sapwood.carbon;
    tree->ind.heartwood.nitrogen+=(sm_ind_temp.nitrogen-tree->ind.sapwood.nitrogen);
  } 
  allometry=treepar->allom1*pow(tree->height/treepar->allom2,reinickerp/treepar->allom3);
  /* bark thickness for fire mortality [cm] */
  stemdiam=pow(tree->height/treepar->allom2,1.0/treepar->allom3);
  tree->barkthickness=treepar->barkthick_par1*(stemdiam*100.0)+treepar->barkthick_par2;
  tree->crownarea=min(allometry,treepar->crownarea_max);
} /* of 'allometry_tree' */ 
