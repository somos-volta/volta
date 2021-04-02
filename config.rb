# Directories
set :data_dir,     "app/data"
set :locales_dir,  "app/locales"

# Relative to source
set :layouts_dir,  "layouts"
set :partials_dir, "partials"

# Assets
set :css_dir,    'assets/stylesheets'
set :js_dir,     'assets/javascripts'
set :fonts_dir,  'assets/fonts'
set :images_dir, 'assets/'

activate :i18n, :mount_at_root => :es

activate :external_pipeline,
         name: :brunch,
         command: build? ?  "npm run build" : "npm run start",
         source: ".tmp",
         latency: 1

# Partials
files.watch :source, path: "/Users/cristian/Development/studio/library"
files.watch :source, path: "/Users/cristian/Development/studio/library/partials"

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

helpers do

  def partial(template, options={}, &block)
    if Dir.exists? File.join(config[:source], config[:partials_dir], File.dirname(template))
      template = File.join(config[:partials_dir], template)
    end
    super(template, options, &block)
  end

end

# Layouts
set :markdown_engine, :redcarpet

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

activate :directory_indexes

# Development-specific configuration
configure :development do
  # Reload the browser automatically whenever files change
  activate :livereload
end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

# configure :build do

# end

configure :build do
#   Enable cache buster (except for images)
#   activate :asset_hash, ignore: [/\.jpg\Z/, /\.png\Z/]
#   activate :minify_css
#   activate :minify_javascript
end
