/**
 * Sample transaction processor function.
 * @param {scm.org.SupplyTrade} tx The sample transaction instance.
 * @transaction
 */
async function supplyTradeTransaction(tx) {
    let commodity = tx.commodity;
    let commodityRegistry = await getAssetRegistry("scm.org.Commodity");
    commodity.owner = tx.to;
    await commodityRegistry.update(commodity);
    const factory = getFactory();
    const supply = factory.newResource("scm.org", "Supply", commodity.serialNumber);
    supply.commodity = commodity;
    supply.from = tx.from;
    supply.to = tx.to;
    supply.id = tx.from.id + tx.commodity.serialNumber + tx.to.id;
    let supplyRegistry = await getAssetRegistry("scm.org.Supply");
    await supplyRegistry.add(supply);
}
