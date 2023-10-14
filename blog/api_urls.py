#there is no need for this file but I left it
#  because here is lot of important 
# learning content, it should be deleted in future

from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from blog.api_views import post_list, post_detail

urlpatterns = [
  path("posts/", post_list, name="api_post_list"),
  path("posts/<int:pk>", post_detail, name="api_post_detail"),
]

urlpatterns = format_suffix_patterns(urlpatterns)