from django.urls import path, include

from .views import LatestProductsList, CustomerList, ProductDetail, CategoryDetail

urlpatterns = [
    path('latest-products/', LatestProductsList.as_view(), name='latestProduct'),
    path('customers/', CustomerList.as_view(), name='customer'),
    path('products/<slug:category_slug>/<slug:product_slug>/', ProductDetail.as_view()),
    path('products/<slug:category_slug>/', CategoryDetail.as_view())
]
