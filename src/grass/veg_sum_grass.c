/**************************************************************************************/
/**                                                                                \n**/
/**           v  e  g  c  _  s  u  m  _  g  r  a  s  s  .  c                       \n**/
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
#include "grass.h"

Real vegc_sum_grass(const Pft *pft)
{
  const Pftgrass *grass;
  grass=pft->data;
  return (phys_sum_grass(grass->ind)+grass->excess_carbon)*pft->nind;
} /* of 'vegc_sum_grass' */

Real vegn_sum_grass(const Pft *pft)
{
  const Pftgrass *grass;
  grass=pft->data;
  return phys_sum_grass_n(grass->ind)*pft->nind;
} /* of 'vegc_sum_grass' */
