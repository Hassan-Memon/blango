from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager
from django.utils.translation import gettext_lazy as _

# Create your models here.

class BlangoUserManager(UserManager):
  def _create_user(self, email, password, **extra_feilds):
    if not email:
      raise ValueError("Email must be set")
    email = self.normalize_email(email)
    user = self.model(email=email, **extra_feilds)
    user.set_password(password)
    user.save(using=self._db)
    return user

  def create_user(self, email, password=None, **extra_feilds):
    extra_feilds.setdefault("is_staff", False)
    extra_feilds.setdefault("is_superuser", False)
    return self._create_user(email, password, **extra_feilds)

  def create_superuser(self, email, password, **extra_feilds):
    extra_feilds.setdefault("is_staff", True)
    extra_feilds.setdefault("is_superuser", True)

    if extra_feilds.get("is_staff") is not True:
      raise ValueError("Superuser must have is_staff=True.")
    if extra_feilds.get("is_superuser") is not True:
      raise ValueError("Superuser must have is_superuser=True.")

    return self._create_user(email, password, **extra_feilds)




class User(AbstractUser):
    username = None
    email = models.EmailField(
        _("email address"),
        unique=True,
    )

    objects = BlangoUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email

