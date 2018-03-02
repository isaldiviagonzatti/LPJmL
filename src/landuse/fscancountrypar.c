/**************************************************************************************/
/**                                                                                \n**/
/**     f s c a n c o u n t r y p a r . c                                          \n**/
/**                                                                                \n**/
/** (C) Potsdam Institute for Climate Impact Research (PIK), see COPYRIGHT file    \n**/
/** authors, and contributors see AUTHORS file                                     \n**/
/** This file is part of LPJmL and licensed under GNU AGPL Version 3               \n**/
/** or later. See LICENSE file or go to http://www.gnu.org/licenses/               \n**/
/** Contact: https://gitlab.pik-potsdam.de/lpjml                                   \n**/
/**                                                                                \n**/
/**************************************************************************************/

#include "lpj.h"

#define UNDEF (-1)

#define fscanreal2(verb,file,var,name,country)\
  if(fscanreal(file,var,name,verb))\
  {\
    if(verb)\
      fprintf(stderr,"ERROR102: Cannot read country '%s' in %s()\n",country,__FUNCTION__);\
    return 0;\
  }

int fscancountrypar(LPJfile *file,           /**< pointer to LPJ file */
                    Countrypar **countrypar, /**< Pointer to countrypar array */
                    int ncft,                /**< number of CFTs or zero */
                    Verbosity verb           /**< verbosity level (NO_ERR,ERR,VERB) */
                   )                         /** \return number of elements in array */
{
  LPJfile arr,item;
  int ncountries,n,id;
  String s;
  Countrypar *country;
  ncountries = 1;
  if (verb>=VERB) puts("// Country parameters");
  if(fscanarray(file,&arr,&ncountries,TRUE,"countrypar",verb))
    return 0;
  *countrypar=newvec(Countrypar,ncountries);
  check(*countrypar);
  for(n=0;n<ncountries;n++)
   (*countrypar)[n].id=UNDEF;
  for(n=0;n<ncountries;n++)
  {
    fscanarrayindex(&arr,&item,n,verb);
    if(fscanint(&item,&id,"id",verb))
      return 0;
    if(id<0 || id>=ncountries)
    {
      if(verb)
        fprintf(stderr,"ERROR125: Invalid range=%d of 'countrynumber' in line %d of '%s'.\n",id,getlinecount(),getfilename());
      return 0;
    }
    country=(*countrypar)+id;
    if(country->id!=UNDEF)
    {
      if(verb)
        fprintf(stderr,
                "ERROR178: Country number=%d in line %d of '%s' has been already defined.\n",id,getlinecount(),getfilename());
      return 0;
    }
    if(fscanstring(&item,s,"name",verb))  /*reads country name*/
    {
      if(verb)
        readstringerr("name");
      return 0;
    }
    country->name=strdup(s);
    check(country->name);
    country->id=id;
    if(ncft)
    {
      country->laimax_cft=newvec(Real,ncft);
      check(country->laimax_cft);
      if(fscanrealarray(&item,country->laimax_cft,ncft,"laimax",verb))
         return 0;
    }
    else
    {
      country->laimax_cft=NULL;
      fscanreal2(verb,&item,&country->laimax_tempcer,"laimax_tempcer",country->name);
      fscanreal2(verb,&item,&country->laimax_maize,"laimax_maize",country->name);
    }
    if(fscanint(&item,&country->default_irrig_system,"default_irrig_system",verb))
      return 0;
    if(country->default_irrig_system<1 || country->default_irrig_system>3)
    {
      if(verb)
        fprintf(stderr,"ERROR215: Default irrigation system=%d is not defined within 1 to 3 for %s in line %d of '%s'.\n",country->default_irrig_system,country->name,getlinecount(),getfilename());
       return 0;
    }
  } /* of 'for(n=0;...)' */
  return n;
} /* of 'fscancountrypar' */
