from django.conf.urls import patterns, url

from tawatchai_pomt_blog.views import IndexView
# from rest_framework_nested import routers


urlpatterns = patterns(
    '',

    url('^.*$', IndexView.as_view(), name='index'),
)
