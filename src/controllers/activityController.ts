import { Request, Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';
import { Activity } from '../models/activityModels';
import { activitySchema } from '../utils/schemaValidator';
import { User } from '../models/usersModel';

export const createActivity = async (req: Request, res: Response) => {
  try {
    const validatedActivity = activitySchema.parse(req.body);
    const newActivity = await Activity.create(validatedActivity);

    res.status(201).json(newActivity);
  } catch (error) {
    console.error(res, error);
    res.status(500).json({ message: 'Cannot create an activity' });
  }
};

export const getActivities = async (req: Request, res: Response) => {
  try {
    const activities = await Activity.find().populate('participants');
    res.status(200).json(activities);
  } catch (error) {
    console.error(res, error);
    res.status(500).json({ message: 'Cannot get activities' });
  }
};

export const joinActivity = async (req: Request, res: Response) => {
  try {
    const { userId, activityId } = req.params;

    const activities = await Activity.findById({ _id: activityId });
    const user = await User.findById({ _id: userId });

    if (!activities) throw new Error('Activity not found');
    if (!user) throw new Error('User not found');

    if (!activities.participants.includes(user._id)) {
      activities.participants.push(user._id);
      await activities.save();
    }
    if (!user.activitats.includes(activities._id)) {
      user.activitats.push(activities._id);
      await user.save();
    }
    res
      .status(200)
      .json({ message: 'Successfully joined the activity', Activity, User });
  } catch (error) {
    console.error('Error joining activity:', error);
    res
      .status(500)
      .json({ message: 'An error occurred while joining the activity' });
  }
};

export const exportActivities = async (req: Request, res: Response) => {
  try {
    const activities = await Activity.find().populate('participants');

    if (activities.length === 0) {
      return res.status(404).json({ message: 'No activities found' });
    }

    const filePath = path.join(__dirname, '../exports/activities.json');
    fs.writeFileSync(filePath, JSON.stringify(activities, null, 2));

    res.status(200).json({
      message: 'Activities exported successfully'
    });
  } catch (error) {
    console.error('Error exporting activities:', error);
    res
      .status(500)
      .json({ message: 'An error occurred while exporting activities' });
  }
};

export const importActivities = async (req: Request, res: Response) => {
  try {
    const { filePath } = req.body;
    if (!filePath) {
      return res.status(400).json({ message: 'File path is required' });
    }

    const data = fs.readFileSync(filePath, 'utf8');
    const activities = JSON.parse(data);

    for (const activity of activities) {
      await Activity.create(activity);
    }

    res.status(200).json({ message: 'Activities imported successfully' });
  } catch (error) {
    console.error('Error importing activities:', error);
    res
      .status(500)
      .json({ message: 'An error occurred while importing activities' });
  }
};
