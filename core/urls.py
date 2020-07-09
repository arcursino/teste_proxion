from core import views
from rest_framework_jwt.views import obtain_jwt_token
from django.urls import path, include


urlpatterns = [
    path('dapau', views.dapau), 
    path('logout', views.logout),
    path('whoami', views.whoami),
    path('settings', views.settings),
    path('add_todo', views.add_todo),
    path('list_todos', views.list_todos), 
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
]
