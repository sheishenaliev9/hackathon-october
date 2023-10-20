from django.test import TestCase
from django.contrib.auth.models import User
from .models import Idea, Category
from datetime import datetime

class IdeaModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        user = User.objects.create_user(username='testuser', password='testpassword')
        category = Category.objects.create(category='Test Category')

        cls.idea = Idea.objects.create(
            title='Test Idea',
            content='Test Content',
            photo='idea/test.jpg',
            user=user,
            cat=category
        )

    # Testing max length of title
    def test_title_max_length(self):
        idea = Idea.objects.get(id=self.idea.id)
        max_length = idea._meta.get_field('title').max_length
        self.assertEqual(max_length, 150)

    # Testing max length of content
    def test_content_max_length(self):
        idea = Idea.objects.get(id=self.idea.id)
        max_length = idea._meta.get_field('content').max_length
        self.assertEqual(max_length, 500)

    # Testing date, like correct it is or not
    def test_create_date(self):
        idea = Idea.objects.get(id=self.idea.id)
        self.assertEqual(idea.create.date(), datetime.now().date())

    # Testing of defalut values
    def test_default_values(self):
        idea = Idea.objects.get(id=self.idea.id)
        self.assertEqual(idea.like, 0)
        self.assertEqual(idea.dislike, 0)
        self.assertEqual(idea.views, 0)

    # Testing working of idea with user
    def test_user_foreign_key(self):
        idea = Idea.objects.get(id=self.idea.id)
        self.assertEqual(idea.user.username, 'testuser')

    # Testing working of idea with category
    def test_category_foreign_key(self):
        idea = Idea.objects.get(id=self.idea.id)
        self.assertEqual(idea.cat.category, 'Test Category')
