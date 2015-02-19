var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-label',
  summary : 'Semantic UI - Label (official): Single component release of label',
  version : '1.9.1',
  git     : 'git://github.com/Semantic-Org/UI-Label.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
