module.exports = key => ({
  urlTemplates: {
    self: `/${key}/{id}`,
    relationship: `/${key}/{ownerId}/relationships/{path}`
  },
  beforeSave: (resource, req, res, superFn) => {
    resource.attrs.owner_id = res.serverRes.locals.user.sub;
    return resource;
  },
  pagination: { defaultPageSize: 25 }
});
