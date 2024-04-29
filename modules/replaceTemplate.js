module.exports = (template, product) => {
  let ret = template.replace(/{%PRODUCTNAME%}/g, product.productName);
  ret = ret.replace(/{%IMAGE%}/g, product.image);
  ret = ret.replace(/{%FROM%}/g, product.from);
  ret = ret.replace(/{%NUTRIENTS%}/g, product.nutrients);
  ret = ret.replace(/{%QUANTATIY%}/g, product.quantity);
  ret = ret.replace(/{%ID%}/g, product.id);
  ret = ret.replace(/{%PRICE%}/g, product.price);
  ret = ret.replace(/{%DESCRIPTION%}/g, product.description);
  if (!product.organic) ret = ret.replace(/{%NOT_ORGANIC%}/g, "not-organic");
  return ret;
}
